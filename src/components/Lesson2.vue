<template>
  <div class="lesson-2">
    <div class="lesson-2__container">
      <div class="lesson-2__img-wrapper">
        <img 
          src="../assets/images/cat.jpg"
          alt="Cat"
          v-if="isCatVisible"
          :class="imgFilters"
          :style="imgStyles"
        >
        <!-- <p v-else>Кот скоро вернется</p> -->
      </div>
      <div class="lesson-2__controls">
        <h1>Кот в пакете</h1>
        <h2>Фильтры</h2>
        <div class="lesson-2__btn-group">
          <button 
            class="lesson-2__btn"
            type="button"
            @click="imgFilters.border = !imgFilters.border"
            :class="imgFilters.border ? 'active' : ''"
          >
            Рамка
          </button>
          <button 
            class="lesson-2__btn"
            type="button"
            @click="imgFilters.sepia = !imgFilters.sepia"
            :class="imgFilters.sepia ? 'active' : ''"
          >
            Сепия
          </button>
          <button 
            class="lesson-2__btn"
            type="button"
            @click="imgFilters.shadow = !imgFilters.shadow"
            :class="imgFilters.shadow ? 'active' : ''"
          >
            Тень
          </button>
        </div>

        <h2>Размер</h2>
        <div class="lesson-2__btn-group">
          <label>
            Ширина {{ imgSizes.currentWidth }} 
            <input
              type="range"
              name="width"
              id="width"
              :min="imgSizes.minWidth"
              :max="imgSizes.maxWidth"
              step="100"
              @input="imgSizes.currentWidth = $event.target.value"
              :value="imgSizes.currentWidth"
            >
          </label>
          <label>
            Высота {{ imgSizes.currentHeight }}
            <input
              type="range"
              name="height"
              id="height"
              :min="imgSizes.minHeight"
              :max="imgSizes.maxHeight"
              step="100"
              @input="imgSizes.currentHeight = $event.target.value"
              :value="imgSizes.currentHeight"
            >
          </label>
        </div>

        <h2>Поворот</h2>
        <div class="lesson-2__btn-group">
          <label>
            Угол {{ imgSizes.currentAngle }} 
            <input
              type="range"
              name="angle"
              id="angle"
              :min="imgSizes.minAngle"
              :max="imgSizes.maxAngle"
              step="5"
              @input="imgSizes.currentAngle = $event.target.value"
              :value="imgSizes.currentAngle"
            >
          </label>
        </div>

        <button 
          class="lesson-2__btn"
          @click="isCatVisible = !isCatVisible"
        >
          <span v-if="isCatVisible">Спрятать</span>
          <span v-else>Показать</span>
        </button>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCatVisible: true,
      imgFilters: {
        sepia: false,
        border: false,
        small: false,
        shadow: false
      },
      imgSizes: {
        minWidth: 300,
        maxWidth: 800,
        minHeight: 100,
        maxHeight: 500,
        currentWidth: 800,
        currentHeight: 500,
        minAngle: 0,
        maxAngle: 360,
        currentAngle: 0
      }
    }
  },
  computed: {
    imgStyles() {
      return {
        width: `${this.imgSizes.currentWidth}px`,
        height: `${this.imgSizes.currentHeight}px`,
        transform: `rotate(${this.imgSizes.currentAngle}deg)`
      }
    }
  }
}
</script>

<style>
  .lesson-2__container {
    display: flex;
    margin: 0 auto;
    max-width: 1200px;
  }

  .lesson-2__img-wrapper {
    margin-right: 50px;
    width: 800px;
    height: 500px;
    background-color: aliceblue;
  }

  .lesson-2__img-wrapper img {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.2s;
  }

  .lesson-2__img-wrapper img.sepia {
    filter: sepia(100%);
  }

  .lesson-2__img-wrapper img.border {
    border: 5px dashed #464646;
  }

  .lesson-2__img-wrapper img.small {
    width: 400px;
  }

  .lesson-2__img-wrapper img.shadow {
    box-shadow: 5px 5px 20px 0 rgba(0,0,0,20%);
  }

  .lesson-2__img-wrapper p {
    margin: 0;
    line-height: 300px;
    text-align: center;
    font-weight: bold;
  }

  .lesson-2__btn-group {
    margin-bottom: 20px;
  }

  .lesson-2__btn-group input {
    display: block;
    margin-bottom: 10px;
  }

  .lesson-2__btn {
    margin-right: 10px;
    border: 1px solid #464646;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: transparent;
    cursor: pointer;
  }

  .lesson-2__btn.active {
    background-color: rgb(245, 231, 220);
  }
</style>