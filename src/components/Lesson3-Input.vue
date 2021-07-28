<template>
   <input 
    type="text"
    class="search"
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
  <!-- Использование v-model на компонентах -->
  <!-- https://ru.vuejs.org/v2/guide/components.html#%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-v-model-%D0%BD%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%B0%D1%85 -->
</template>

<script>
export default {
  props: ['value']
}
</script>

<style>
  input {
    height: 25px;
    margin-left: 40px;
  }
</style>