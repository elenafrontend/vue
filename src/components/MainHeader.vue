<template>
  <header class="main-header">
    <div class="container">
      <div class="logo">
        <router-link
          :to="{ name: 'main' }"
          class="main-header__link main-header__logo"
        >
          Кинотеатр
        </router-link>
      </div>
      <nav class="main-header__links">
        <ul class="list-default">
          <li v-for="(link, index) of links" :key="index">
            <router-link
              :to="{ name: link.page }"
              class="main-header__link"
            >
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </nav>
      <button class="btn btn-outline-light btn-lg" @click="onAuthBtnClick">
        {{ getUser ? 'Выйти' : 'Войти' }}
      </button>
    </div>
    <AuthModal
      v-if="isAuthModalOpen"
      @close="isAuthModalOpen = false"
    />
  </header>
</template>

<script>
import AuthModal from './AuthModal'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: { AuthModal },
  data() {
    return {
      isAuthModalOpen: false,
      isUserAuth: false,
      links: [
        {
          name: 'Фильмы',
          page: 'films'
        }
      ]
    }
  },

  computed: {
    ...mapGetters({
      getUser: 'user/getUser'
    })
  },

   created() {
    this.setUser(JSON.parse(localStorage.getItem('user')))
  },

  methods: {
    ...mapActions({
      setUser: 'user/setUser'
    }),

    onAuthBtnClick() {
      if(this.getUser) {
        localStorage.removeItem('user')
        this.$router.push({ name: 'main' })
      } else {
        this.isAuthModalOpen = true
      }
    }
  }

}
</script>

<style scoped>
.main-header {
  padding: 20px;
  min-height: 70px;
  background-color: #0c0c0c;
}

.main-header .container {
  display: flex;
  align-items: center;
  margin: 0 auto;
}

.main-header__link {
  text-decoration: none;
  font-weight: 700;
  color: #ffffff;
  font-size: 25px;
}

.main-header__link:hover {
  text-decoration: none;
}

.main-header__logo {
  font-size: 30px;
  color: #eb5804;
}

.main-header__links {
  margin-left: 75px;
}

.main-header__links li {
  margin-bottom: 0;
}

.main-header .btn {
  margin-left: auto;
}

</style>