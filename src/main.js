import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store/index'

Vue.use(VueRouter)

import '@/assets/styles/main.css'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
