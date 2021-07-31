export default {
  methods: {
    onScrollEnd() {
      console.warn("You must override onScrollEnd method");
    },

    onScroll(evt) {
      const container = evt.target;
      if (
        container.scrollHeight - container.clientHeight <=
        container.scrollTop
      ) {
        this.onScrollEnd();
      }
    },
  },
};
