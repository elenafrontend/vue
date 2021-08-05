<template>
  <div class="films-layout">
    <MainHeader/>
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader'

export default {
  components: { MainHeader },
  
  created() {
    this.$store.dispatch('loadReactions', 1000)
  }
}
</script>