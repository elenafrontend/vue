<template>
  <ul class="films-list list-default">
    <FilmCard
      v-for="film of films"
      :key='film.id'
      :film='film'
    />
  </ul> 
</template>

<script>
import FilmCard from './FilmCard'
export default {
  components: { FilmCard },
  props: ['films'] 
}
</script>

<style scoped>
.film-card {
  margin-bottom: 40px;
}
</style>