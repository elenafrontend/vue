import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store/index'
import vmodal from 'vue-js-modal'
import ApiPlugin from './plugins/api'

Vue.use(VueRouter)
Vue.use(vmodal)
Vue.use(ApiPlugin)

import '@/assets/styles/main.css'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
