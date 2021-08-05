<template>
  <modal
    name="auth-modal"
  >
    This is my first modal
  </modal>
</template>

<script>
export default {
  name: 'auth-modal',
  methods: {
    show () {
      this.$modal.show('auth-modal');
    }
  },
  mounted() {
    this.show()
  }
}
</script>