import api from "../api";

export default {
  install(Vue) {
    Vue.prototype.$fetch = api
  }
}