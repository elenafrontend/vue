export default function(instance) {
  return {
    getFilm(id) {
      return instance.get(`films/${id}`)
    },
    getFilms() {
      return instance.get('films')
    }
  }
}