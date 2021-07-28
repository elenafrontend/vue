<template>
  <div class="lesson1-hw">
    <h1>Я найду тебя!</h1>
    <input 
      type="text"
      :value="searchText"
      @input="search($event.target.value)"
    >
    <p>Всего имен: {{ namesList.length }}, совпадений {{ getFilteredNames.length }}</p>
    <ul class="lesson1-hw__list">
      <li
        v-for="(name, index) of getFilteredNames"
        :key="index"
      >
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchText: '',
      namesList: ['Василий', 'Петр', 'Алексей', 'Марат']
    }
  },

  computed: {
    getFilteredNames() {
      return this.namesList.filter(name => name.toLowerCase().includes(this.searchText.toLowerCase()))
    }
  },

  methods: {
    search(event) {
      this.searchText = event
    }
  }
}
</script>

<style>
  .lesson1-hw {
    margin: 0 auto;
    width: 500px;
  }

  .lesson1-hw__list {
    margin: 0;
    margin-top: 20px;
    padding: 0;
    list-style: none;
  }

  .lesson1-hw__list li {
    margin-bottom: 10px;
  }

</style>