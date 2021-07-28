<template>
  <li class="product-card">
    <img
      :src="imgUrl" 
      width="300px"
    >
    <div class="product-card__info">
      <h2>{{ title }}</h2>
      <p class="product-card__price">{{ price }}р.</p>
      <p class="count">Доступно для доставки {{ count }}шт.</p>
      <button type="button"> Добавить в корзину</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'product-card',
  
  props: {
    title: {
      type: String,
      validator(value) {
        return value.length < 50
      }
    },
    price: {
      Number,
      required: true
    },
    imgUrl: {
      type: String,
      default: 'https://tsum.by/images/no-photo.png'
    },
    count: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {}
  }
}
</script>

<style>
  .product-card {
    border: 1px solid rgb(211, 211, 211);
    padding: 20px 15px;
  }
  
  .product-card__info {
    margin-top: 20px;
  }
  
  .product-card__info h2, 
  .product-card__info .price {
    font-weight: 500;
  }

  .product-card__info .count {
    color: rgb(143, 143, 143);
  }
  
  .product-card__info button {
    background-color: rgb(221, 56, 56);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 14px;
    display: block;
    cursor: pointer;
    margin-top: 20px;
  }

</style>

