<template>
  <modal
    name="auth-modal"
    width="500px"
    height="350px"
    classes="auth-modal"
    @closed="close"
  >
    <form @submit.prevent="authFormSubmit">
      <h3>{{ isSignInForm ? 'Войти' : 'Регистрация' }}</h3>
      <label>
        Email
        <input 
          class="form-control"
          type="text"
          placeholder="Ваша эл. почта"
          v-model="form.email"
        >
      </label>
      
      <label for="password">
        Пароль
        <input 
          class="form-control"
          type="text"
          placeholder="Ваш пароль"
          v-model="form.password"
        >
      </label>
      <div class="actions">
        <a 
        href="#"
        @click.prevent="isSignInForm =  !isSignInForm"
        >
          {{ isSignInForm ? 'Регистрация' : 'Вход' }}
        </a>
        <button
          class="btn btn-outline-dark"
          type="button"
          @click="close"
        >
          Отмена
        </button>
        <button
          class="btn btn-dark"
          type="submit"
        >
          Подтвердить
        </button>
      </div>
    </form>
  </modal>
</template>

<script>
export default {
  name: 'auth-modal',
  data() {
    return {
      isSignInForm: true,
      form: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    close () {
      this.$emit('close')
    },

    authFormSubmit() {
      if(this.isSignInForm) {
        this.close();
      } else {
        this.isSignInForm = true
      }
    }
  },

  mounted() {
    this.$modal.show('auth-modal');
  }
}
</script>

<style>
.auth-modal {
  padding: 30px 40px;
}
.auth-modal form {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.auth-modal h3 {
  margin-bottom: 30px;
}

.auth-modal label {
  width: 100%;
  margin-bottom: 20px;
}

.auth-modal .actions {
  margin-top: auto;
  display: flex;
  align-items: baseline;
}

.auth-modal a {
  color: #EB5804;
}

.auth-modal button {
  width: 130px;
  margin-left: 10px;
}

.auth-modal button:first-of-type {
  margin-left: auto;
}

</style>