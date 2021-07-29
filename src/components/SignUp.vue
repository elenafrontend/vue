<template>
  <!-- Работа с формами -->
  <!-- https://ru.vuejs.org/v2/guide/forms.html -->

  <!-- v-model игнорирует начальное значение атрибутов value, checked или selected на любых элементах форм. 
    Данные экземпляра Vue всегда считаются источником истины. 
    Начальное значение необходимо объявить на стороне JavaScript, внутри опции data компонента. -->

  
  <form class="sign-up">
    <div class="form-group">
      <label for="login">Логин</label>
      <input
        class="form-control"
        id="login"
        v-model.trim="form.login"
      >
      <!-- модификатор trim обрезает пробелы, которые были введены через форму и они не попадают в переменные -->
    </div>
    <div class="form-group">
      <label for="email">Почта</label>
      <input
        class="form-control"
        id="email"
        type="email"
        v-model.trim="form.email"
      >
    </div>

    <div class="form-group">
      <label for="password">Пароль</label>
      <input
        class="form-control"
        id="password"
        type="password"
        v-model.trim="form.password"
      >
    </div>

    <!-- Селект -->
    <!-- значение default устанавливаем через v-model -->
    <div class="form-group">
      <label for="country">Страна проживания</label>
      <select
        class="form-control"
        id="country"
        type="country"
        v-model="form.country"
      >
        <option
          v-for="(country, index) of countries"
          :key="index"
          :value="country.value"
        >
          {{ country.label }}
        </option>
      </select>
    </div>

    <!-- Селект с множеств выбором -->
    <!-- для value селекта создаем массив, куда при выборе добавляются дополнительные элементы -->
    <div class="form-group">
      <label for="favorites">Любимые темы</label>
      <select
        class="form-control"
        id="favorites"
        type="favorites"
        multiple
        v-model="form.favorites"
      >
        <option
          v-for="(theme, index) of themes"
          :key="index"
          :value="theme.value"
        >
          {{ theme.label }}
        </option>
      </select>
    </div>

    <!-- Значение по умолчанию - булевая переменная если checkbox один -->
    <!-- если чекбоксов несколько - массив + обязательно value д/каждого чекбокса, который будет добавляться в массив при выборе -->

    <div class="form-group form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="notification"
        value="cources"
        v-model="form.checkedInputs"
      >
      <label class="form-check-label" for="notification">Уведомлять меня о новых курсах</label>
    </div>

    <div class="form-group form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="notification2"
        value="books"
        v-model="form.checkedInputs"
        checked
      >
      <label class="form-check-label" for="notification2">Уведомлять меня о новых книгах</label>
    </div>

  <!-- для radio также как у чекбоксов value -->
  <!-- но при этом значение может быть только одно, поэтому это уже не массив, а строка -->
    <div class="flex">
      <div class="form-check">
        <input class="form-check-input" type="radio" value="male" name="exampleRadios" id="male" v-model="form.gender" form.>
        <label class="form-check-label" for="male">
          Мужчина
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" value="female" name="exampleRadios" id="female" v-model="form.gender">
        <label class="form-check-label" for="female">
          Женщина
        </label>
      </div>
    </div>

  </form>
</template>

<script>
// Подключаем vuelidate не глобально, а как миксин
import { validationMixin } from 'vuelidate'

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        login: '',
        email: '',
        password: '',
        country: 'Sweden',
        checkedInputs: [],
        gender: 'male',
        favorites: ['it'],
      },
      countries: [
        {
          label: 'Россия',
          value: 'Russia'
        },
        {
          label: 'Швеция',
          value: 'Sweden'
        },
        {
          label: 'Канада',
          value: 'Canada'
        }
      ],
      themes: [
        {
          label: 'IT',
          value: 'it'
        },
        {
          label: 'Food',
          value: 'food'
        },
        {
          label: 'Books',
          value: 'books'
        }
      ],
    }
  },
  validations: {
    form: {
      login: {
        simpleValidation(value) {
          console.log(value);
          return value.length > 5;
        }
      }
    }
  }
}
</script>

<style>
.form-control {
  width: 400px;
}
.form-check {
  margin-right: 10px;
}
button {
  margin-top: 15px;
}
</style>