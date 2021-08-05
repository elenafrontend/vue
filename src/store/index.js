import Vue from 'vue'
import Vuex from 'vuex'
// импортируем данные 'сервера'
import reactions from '../mocks/reactions'

Vue.use(Vuex)

// имитация запроса на сервер, возвращает промис с задержкой
const fetch = () => {
  new Promise((resolve) => { 
    setTimeout(() => {
      resolve(reactions)
    }, 1000)
  })
}

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {},
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    async loadReactions() {
      try {
        const reactions = await fetch()
        console.log(reactions);
      } catch(error) {
        console.error(error)
      }
    }
  }
})