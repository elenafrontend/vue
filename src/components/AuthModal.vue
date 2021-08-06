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

    async signIn() {
        try {

          // test user
          // {
          //   "username": "user@example.com",
          //   "password": "123"
          // }
        
        const responce = await fetch('http://127.0.0.1:8000/api/token/', {
          method: 'POST',
          headers: {
            // тип передаваемых данных
            'Content-Type': 'application/json'
          },
          // утстанавливаем cookies при наличии в ответе от сервера
          credentials: 'include',
          // тело запроса
          body: JSON.stringify({
            //  данные, которые ввел пользователь
            username: this.form.email,
            password: this.form.password,
          })
        })
        const data = await responce.json()

        // обрабатываем ответ сервера
        if(responce.status === 200 || responce.status === 201) {
          localStorage.setItem('user', JSON.stringify(data))
          // передаем данные пользователя в store
          this.$store.dispatch('user/setUser', data)
          this.$emit('close')
        } else {
          // отображаем ошибки при ответе
          this.errors = data
          console.error(data.detail);
        }
      } catch (error) {
        // ошибки при создании запроса
        console.error(error);
      }
    },

    signUp() {

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