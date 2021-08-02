import VueRouter from 'vue-router'

import MainPage from '../pages/MainPage'
import AllFilmsPage from '../pages/AllFilmsPage'

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      // при изменении пути ссылка остается активной, т.к. подключили ч.з имя
      path: '/allfilms',
      name: 'films',
      component: AllFilmsPage
    },
  ]
})