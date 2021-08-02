import VueRouter from 'vue-router'

import MainPage from '../pages/MainPage'
import AllFilmsPage from '../pages/AllFilmsPage'
import FilmPage from '../pages/FilmPage'
import NotFound from '../pages/404'
import FilmsLayout from '../pages/FilmsLayout'

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      // при изменении пути ссылка остается активной, т.к. подключили ч.з имя
      path: '/films',
      name: 'filmsLayout',
      component: FilmsLayout,
      children: [
        {
          path: '',
          name: 'films',
          component: AllFilmsPage,
        },
        {
          path: ':id',
          name: 'filmPage',
          component: FilmPage,
          // https://router.vuejs.org/guide/advanced/navigation-guards.html#navigation-guards
          // навигационные хуки vue-router используются для перенаправлений или отмены навигационных переходов
          // в данном случае устанавливаем ограничение на конкр маршрута
          beforeEnter: (to, from, next) => {
            if(localStorage.getItem('auth')) {
              next()
            } else {
              next({ name: 'films' })
            }
          }
        },
        {
          path: '*/*',
          redirect: { name: 'films' }
        }
      ]
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    },
  ]
})