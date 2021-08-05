<template>
  <article class="film-page container">
    <h1 class="line">{{ film.title }}</h1>
    <img
      :src="film.img"
      :alt="film.title"
    >
    <section class="section">
      <h2 class="section__title title">Немного о сюжете:</h2>
      <p class="section__description">{{ film.description }}</p>
    </section>
    <section class="section">
      <h2 class="section__title title">Рейтинг:</h2>
      <p class="section__description">{{ film.rating }}</p>
    </section>
    <section class="section">
      <h2 class="section__title title">Актерский состав:</h2>
      <p class="section__description">{{ film.actors.join(', ') }}</p>
    </section>
    <section class="section line">
      <h2 class="section__title title">Режисеры:</h2>
      <p class="section__description">{{ film.directors.join(', ') }}</p>
    </section>
    
    <section class="review">
      <h2 class="review__title title">Смотрели данный фильм ?</h2>
      <p class="review__description">Оставьте отзыв:</p>
      <ul class="review__list list-default">
        <li class="review__item" v-for="reaction in reactions" :key="reaction.id">
          <button type="button" class="btn btn-outline-light">
            {{ reaction.title }}
          </button>
        </li>
      </ul>
    </section>

  </article>
</template>

<script>
import films from '../mocks/films'
// import reactions from '../mocks/reactions'

export default {
  data() {
    return {
      film: null,
    }
  },

  computed: {
    reactions() {
      return this.$store.getters.reactions
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

<style scope>
.film-page {
  padding-bottom: 100px !important;
}

.film-page .back {
    color: #ffffff;
    margin-left: 30px;
    margin-top: 30px;
}

.film-page  h1 {
    color: #ffffff;
    margin-bottom: 30px;
}

.film-page .line {
  position: relative;
  padding-bottom: 15px;
}

.film-page .line::before {
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

.film-page .section {
  margin-bottom: 15px;
}

.film-page .section.line {
  margin-bottom: 45px;
}

.film-page .title {
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 10px;
}

.film-page .section__title {
  color: #EB5804;
}

.film-page .section__description {
  margin-bottom: 0;
  color: #ffffff;
  font-size: 18px;
  line-height: 30px;
}

.review__title {
  color: #ffffff;
}

.review__description {
  font-weight: 600;
  font-size: 18px;
  color: #EB5804;
}

.review__list {
  display: flex;
}

.review__item {
  margin-right: 15px;
}

</style>