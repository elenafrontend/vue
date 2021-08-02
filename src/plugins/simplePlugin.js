import scrollHandler from "../mixins/scrollHandler";

export default {
  // метод install будет вызываться с конструктором Vue в качестве первого аргумента
  install(Vue) {
    Vue.mixin(scrollHandler),
    
    Vue.prototype.$myLog = function() {
      console.log('simplePlugin works');
      
    }
  }
}