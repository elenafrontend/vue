<template>
  <div id="app" class="container">
    <UserForm></UserForm>
  </div>
</template>

<script>
import UserForm from './components/user-form'

export default {
  name: 'App',
  components: {
    UserForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
