<template>
  <div class="films-layout">
    <MainHeader/>
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader'
import { mapActions } from 'vuex'

export default {
  components: { MainHeader },

  methods: {
    ...mapActions({loadReactions: 'reactions/loadReactions'})
  },
  
  created() {
    this.loadReactions(1000)
  }
}
</script>