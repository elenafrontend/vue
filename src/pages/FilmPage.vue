<template>
  <div class="film-page container">
    <h1>{{ film.title }}</h1>
    <img
      :src="film.img"
      :alt="film.title"
    >
    <section class="section">
      <p class="section__title">Немного о сюжете:</p>
      <p class="section__description">{{ film.description }}</p>
    </section>
    <section class="section">
      <p class="section__title">Рейтинг:</p>
      <p class="section__description">{{ film.rating }}</p>
    </section>
    <section class="section">
      <p class="section__title">Актерский состав:</p>
      <p class="section__description">{{ film.actors.join(', ') }}</p>
    </section>
    <section class="section">
      <p class="section__title">Режисеры:</p>
      <p class="section__description">{{ film.directors.join(', ') }}</p>
    </section>

  </div>
</template>

<script>
import films from '../mocks/films'

export default {
  data() {
    return {
      film: null
    }
  },

  created() {
    const film = films.find(film => film.id == this.$route.params.id)
    if(film) {
      this.film = film
    }
  }
}
</script>

<style>
.film-page {
  padding-bottom: 100px;
}

.film-page .back {
    color: #ffffff;
    margin-left: 30px;
    margin-top: 30px;
}

.film-page  h1 {
    color: #ffffff;
    margin-bottom: 30px;
    padding-bottom: 15px;
    position: relative;
}

.film-page h1::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  background: linear-gradient(90deg, #EB5804 0%, rgba(0,0,0,0) 90%);
}

.film-page img {
  object-fit: cover;
  border-radius: 10px;
  width: 1160px;
  height: 600px;
  margin-bottom: 30px;
}

.film-page .section__title {
  color: #EB5804;
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 10px;
}

.film-page .section__description {
    color: #ffffff;
    font-size: 18px;
    line-height: 30px;
  }

</style>