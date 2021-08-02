<template>
  <div class="all-films container">
    <h1>Выбери фильм на свой вкус</h1>
    <FilmsList :films='films'></FilmsList>
  </div>
</template>

<script>

import FilmsList from '../components/FilmsList'
import films from '../mocks/films'

export default {
  components: { FilmsList },
  data () {
    return {
      films
    }
  }
  
}
</script>