<template>
  <div id="app">
    <!-- <Lesson1></Lesson1> -->
    <Lesson1hw />
  </div>
</template>

<script>
// import Lesson1 from './components/Lesson1'
import Lesson1hw from './components/Lesson1-hw'

export default {
  name: 'App',
  components: {
    // Lesson1
    Lesson1hw
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
