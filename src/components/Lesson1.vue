<template>
  <div class="conatiner">
    <div class="user-card">
      <h1>Научу зарабатывать от 50 000р. в час</h1>
      <div class="main-information flex">
        <img src="../assets/images/коуч.jpg" width="500px">
        <div class="info">
          <h2> {{ getAuthorName }}
          </h2>
          <strong>Бизнес-коуч</strong>
          <ul class="list">
            <li>Учу делать РЕАЛЬНЫЕ бабки, на себя просто не хватило времени</li>
            <li>НЕ знаю, что такое "Успешный Успех", но знаю, что нужно ТЕБЕ!</li>
            <li>Пообещал, что побреюсь, когда кого-нибудь ОБМАНУ.</li>
          </ul>
        </div>
      </div>
      <p>Участников: 0</p>
      <ul>
        <li
          v-for="(user, index) of users"
          :key="index"
        >
          {{ `${index + 1} ${getUserName(user)}` }}
        </li>
      </ul>
      <button
        type="button"
        @click="currentPage--"
      >
        Пред.
      </button>
      <button
        type="button"
        v-for="page of pages"
        :key="page"
        @click="currentPage = page"
      >
        {{ page }}
      </button>
      <button
        type="button"
        @click="currentPage++"
      >
        След.
      </button>
      <p>Страница {{ currentPage }} из {{ pages }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      firstName: 'Игнатий',
      secondName: 'Иларионович',
      lastName: 'Богатов',
      users: [
        {
          firstName: 'Игнатий',
          secondName: 'Иларионович',
          lastName: 'Богатов'
        },
        {
          firstName: 'Алексей',
          secondName: 'Иларионович',
          lastName: 'Богатов'
        },
        {
          firstName: 'Игнатий',
          secondName: 'Иларионович',
          lastName: 'Богатов'
        }
      ],
      currentPage: 1,
      pages: 3
    }
  },
  computed: {
    getAuthorName() {
      return `${this.firstName} ${this.secondName} ${this.lastName}`.toUpperCase()
    }
  },

  methods: {
    getUserName(user) {
      return `${user.firstName} ${user.secondName} ${user.lastName}`
    },

    loadUsers(page) {
      console.log(`Загрузка пользователей: страница ${page}`);
      
    }
  },

  watch: {
    currentPage(page) {
      this.loadUsers(page)
    }
  }
}
</script>

<style>
  .user-card {
    margin-top: 40px;
  }
  .info {
    margin-left: 50px;
  }
  h2 {
    margin-bottom: 14px;
  }
</style>