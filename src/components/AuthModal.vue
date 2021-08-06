<template>
  <modal
    name="auth-modal"
    width="500px"
    height="auto"
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
          name="email"
          :class="{ error : errors }"
        >
      </label>
      
      <label>
        Пароль
        <input 
          class="form-control"
          type="password"
          placeholder="Ваш пароль"
          v-model="form.password"
          name="password"
          :class="{ error : errors }"
        >
      </label>
      <!-- <p v-if="errors">{{ errors.detail }}</p> -->
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
      },
      errors: ''
    }
  },

  
  mounted() {
    this.$modal.show('auth-modal');
  },

  methods: {
    close () {
      this.$emit('close')
    },

    authFormSubmit() {
      if(this.isSignInForm) {
        this.signIn();
      } else {
        this.signUp();
      }
    },

    signIn() {
      this.$fetch.auth.signIn()
        .then(responce => { return responce.data })
        .catch(error => { console.error(error)} )
        .then(data => {
          console.log(data);
          localStorage.setItem('user', JSON.stringify(data))
          this.$store.dispatch('user/setUser', data)
          this.close()
        })
    },

    signUp() {
      this.$fetch.auth.signUp({
        email: this.form.email,
        password: this.form.password,
      })
        .then(responce => { return responce.data })
        .catch(error => { console.error(error)} )
        .then(data => {
          console.log(data);
          localStorage.setItem('user', JSON.stringify(data))
          this.$store.dispatch('user/setUser', data)
          this.close()
        })
    }
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

.auth-modal .form-control.error {
  border-color: #eb5804;
}

.auth-modal .actions {
  margin-top: 35px;
  display: flex;
  align-items: baseline;
}

.auth-modal a {
  color: #eb5804;
}

.auth-modal button {
  width: 130px;
  margin-left: 10px;
}

.auth-modal button:first-of-type {
  margin-left: auto;
}

</style>