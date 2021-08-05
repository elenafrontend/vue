// импортируем данные 'сервера'
import reactions from '../../mocks/reactions'

// имитация запроса на сервер, возвращает промис с задержкой
const fetch = (time) => {
  return new Promise((resolve) => { 
    setTimeout(() => {
      resolve(reactions)
    }, time)
  })
}

export default {
  namespaced: true,
  state: {
    reactions: []
  },
  getters: {
    reactions(state) {
      return state.reactions
    }
  },
  mutations: {
    SET_REACTIONS(state, reactions) {
      state.reactions = reactions
    }
  },
  actions: {
    async loadReactions({ commit }, time) {
      try {
        const reactions = await fetch(time)
        commit('SET_REACTIONS', reactions)
      } catch(error) {
        console.error(error)
      }
    }
  }
}