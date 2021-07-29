<template>
  <div class="search">
    <input 
    type="text"
    class="search"
    v-model='searchText'
    >
    <button @click="$emit('search', searchText)">
      Найти
    </button>
  </div>
</template>

<script>
export default {
  name: 'search',
  
  data () {
    return {
      searchText: 'product'
    }
  }
}
</script>

<style>
  input {
    height: 25px;
    margin-left: 40px;
  }

  
.search button {
    background-color: rgb(221, 56, 56);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 14px;
    cursor: pointer;
    margin-left: 10px;
}
</style>