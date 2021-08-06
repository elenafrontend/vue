<template>
  <div class="all-films container">
    <h1>Выбери фильм на свой вкус</h1>
    <FilmsList :films='films'></FilmsList>
  </div>
</template>

<script>

import FilmsList from '../components/FilmsList'

export default {
  components: { FilmsList },
  
  computed: {
    films() {
      return this.$store.getters.filmsList
    }
  },

  created() {
    this.$store.dispatch('fetchFilms')
  }
}
</script>

<style scoped>
h1 {
  font-size: 40px;
  color:#ffffff;
  margin-bottom: 30px;
}
</style>