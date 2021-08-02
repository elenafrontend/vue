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
          component: FilmPage
        },
      ]
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    },
  ]
})