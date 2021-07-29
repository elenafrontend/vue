<template>
  <div class="product-list">
    <div class="flex top-information">
      <h1>Письменные столы</h1>
      <search @search="searchProducts"></search>
      
      <!-- v-model делает тоже самое что  и:-->
      <!-- <input type="text" class="search" :value="searchText" @input="searchText = $event.target.value"> -->
      
      <!-- При использовании на компоненте, v-model вместо этого делает следующее: -->
      <!-- <custom-input
        v-bind:value="searchText"
        v-on:input="searchText = $event"
      ></custom-input> -->

      <!-- Чтобы это действительно работало, элемент <input> внутри компонента должен:
      Привязывать значение атрибута value к входному параметру value
      По событию input генерировать собственное пользовательское событие input с новым значением -->

      <!-- В родителе подписываемся на это событие на компоненте Input 
      <Input :value="searchText" @search="searchText = $event"></Input>
      -->

      <!-- Ч/з v-model:
        <Input :value="searchText" @search="searchText = $event"></Input> заменяем на сокращенную запись, которая делает тоже самое
        === 
        <Input v-model="searchText"></Input>
        
        В свою очередь v-model настраиваем в компоненте
        -->
    </div>

    <ul class="list-default flex">
      <product-card 
        v-for="(product, index) of products"
        :key="index"
        :title="product.title"
        :price="product.price"
        :imgUrl="product.imgUrl"
        :count="product.count"
        @addToBasket="addToBasket(index)"
      />
    </ul>  
  </div>
</template>

<script>
import Search from './Lesson3-Search'
import ProductCard from './Lesson3-ProductCard'

export default {
  name: 'product-list',
  components: {
    Search, 
    ProductCard 
  },
  data () {
   
    return {
      searchText: 'hello input',
      products: [
        {
          title: 'Стол Jim',
          price: 19999,
          imgUrl: 'https://hoff.ru/upload/iblock/8c9/8c989500ee8639b9e3aa267b1888b4af.jpg',
          count: 30
        },
        {
          title: 'Стол Monako',
          price: 17199,
          imgUrl: 'https://hoff.ru/upload/iblock/af2/af2d37161f217d4f489373be7da4a7a0.jpg',
          count: 20
        },
        {
          title: 'Стол с двумя ящиками Кварт MD 768',
          price: 10999,
          imgUrl: 'https://hoff.ru/upload/iblock/1cc/1ccb33b50e3e9cfa08629bf455e41855.jpg',
          count: 23
        }

      ]
    }
  },

  methods: {
    addToBasket(index) {
      console.log(index);
    },

    searchProducts(searchText) {
      console.log('Запрос на товар: ' + searchText);
      
    }
  }
}
</script>

<style>
li {
  margin-right: 20px;
}
.top-information {
  align-items: center;
  margin-bottom: 22px;
}

.top-information h1 {
    margin-bottom: 0;
}

</style>

