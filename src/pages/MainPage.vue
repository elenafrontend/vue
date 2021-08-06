<template>
  <div class="main-page flex">
    <h1>Онлайн-кинотеатр</h1>
    <button type="button" class="btn btn-outline-light" @click="$router.push({ name: 'films'})">Перейти к фильмам</button>
  </div>
</template>

<style>
  .main-page {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  .main-page h1 {
    margin-bottom: 20px;
    font-size: 70px;
    color: #fff;
  }
</style>