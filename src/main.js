import Vue from 'vue'
import App from './App.vue'
import SimplePlugin from './plugins/simplePlugin'

Vue.config.productionTip = false
Vue.use(SimplePlugin)


new Vue({
  render: h => h(App),
}).$mount('#app')
