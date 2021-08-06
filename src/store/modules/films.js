import api from '../../api'

export default {
  state: {
    films: []
  },
  getters: {
    filmsList(state) {
      return state.films
    }
  },
  mutations: {
    UPDATE_FILMS(state, films) {
      state.films = films
    }
  },
  actions: {
    fetchFilms({ commit }) {
      api.films.getFilms()
        .then(responce => { return responce.data })
        .then((data) => { commit('UPDATE_FILMS', data) })
    }
  }
}