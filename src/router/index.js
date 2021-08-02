import VueRouter from 'vue-router'

import MainPage from '../pages/MainPage'
import AllFilmsPage from '../pages/AllFilmsPage'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/films',
      component: AllFilmsPage
    }
  ]
})