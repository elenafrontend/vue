<template>
   <input 
    type="text"
    class="search"
    @input="$emit('searchInput', $event.target.value)"
  >
  <!-- Использование v-model на компонентах -->
  <!-- https://ru.vuejs.org/v2/guide/components.html#%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-v-model-%D0%BD%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%B0%D1%85 -->

  <!-- При использовании на компоненте, v-model делает следующее:
    
    <custom-input
      v-bind:value="searchText" // в родителе устанавливаем значение свойства searchText
      v-on:input="searchText = $event" // и меняем по особытию input - событие которое прослушивает родитель у компонента , можно назвать как угодно
      // при этом компонент во время события @input генерирует с пом метода $emit событие @input="$emit('input', $event.target.value)"
      // и передает наверх значение $event.target.value
    ></custom-input>
    
    ===

    <custom-input v-model="searchText"></custom-input>
  -->
  
  <!-- Итого -->
  <!-- Можно передать данные из компонента в родителе для v-model 2 вариантами:
    
    1. 
    В самом компоненте привязываемся к входящему значению value, который спускается от родителя
    :value="value" 
    +
    props: ['value']

    в компоненте добавляем прослушиватель события инпут, при котором создается новый $event и передается наверх value
    @input="$emit('search', $event.target.value)"

    В родителе подписываемся на это событие search

    2. Тоже самое что и верхний алгоритм только через настройку v-model:
    -  оставляем прослушиватель события @input="$emit('search', $event.target.value)", который генерирует событие search
    - настраиваем v-model:
    export default {
      model: {
        props: 'value', //значение от родителя
        event: 'input' // событие, которое компонент будет слушать в родителе
      }
    }
    -->
</template>

<script>
export default {
  model: {
    props: 'value',
    event: 'searchInput'
  }
}
</script>

<style>
  input {
    height: 25px;
    margin-left: 40px;
  }
</style>