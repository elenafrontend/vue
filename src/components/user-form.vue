<template>
  <div class="user-form">
    <div class="flex">
      <div class="user-form__column">
        <h2>Информация о себе:</h2>
        <label 
          class="user-form__group"
          v-for="(fieldValue, fieldLabel, index) of fields"
          :key="index"
        >
          {{ fieldLabel }}
          <input
            class="user-form__input"
            type="text"
            v-model='fields[fieldLabel]'
          >
        </label>
        <button class="user-form__btn">Сохранить</button>

        <label class="user-form__group">
          Дополнительное поле
          <input
            class="user-form__input"
            type="text"
            v-model="newField"
          >
        </label>
        <button
          class="user-form__btn user-form__btn--add"
          @click="addNewField"
        >
          Добавить
        </button>

        <p>массив: {{ test }}</p>
        <button
          class="user-form__btn user-form__btn--add"
          @click='changeArray'
        >
        Добавить в массив
        </button>

      </div>

      <div class="form-group">
        <h2>Предпросмотр:</h2>
        <p
          v-for="(fieldValue, fieldLabel, index) of fields"
          :key="index"
        >
        {{ `${fieldLabel}: ${fieldValue}` }}
        <!-- === 
          {{ fieldLabel }}: {{ fieldValue }} -->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-form',
  data () {
    return {
      fields: {
        firstName: '',
        secondName: '',
        lastName: ''
      },
      newField: '',
      test: ['Я', 'изучаю', 'JS']
    }
  },
  methods: {
    addNewField() {
      this.$set(this.fields, this.newField, '')
      
    },
    changeArray() {
      this.test.splice(2, 0, 'язык')
    }
  }
}
</script>

<style>
.user-form__column {
  margin-right: 75px;
  min-width: 350px;
}

.user-form__group {
  display: block;
  margin-bottom: 20px;
}

.user-form__input {
  display: block;
  margin-top: 10px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  width: 100%;
  min-height: 25px;
}

.user-form__btn {
  margin-bottom: 20px;
  padding: 7px 15px;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-color: #046f99;
}

.user-form__btn--add {
  background-color: #059e6b;
}

</style>