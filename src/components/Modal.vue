<template>
  <div class="modal fade show">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5>{{ title }}</h5>
          <button
            type="button"
            class="close"
            aria-label="close"
            @click="closeModal"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" @scroll="onScroll">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button class="btn btn-secondary" @click="closeModal">
              Отмена
            </button>
            <button class="btn btn-primary" :disabled="!isRulesReaded">
              Принять
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// убираем импорт и подключение миксина
// потому что теперь он у нас объявлен глобально ч/з плагин SimplePlugin

export default {
  props: ["title"],

  data() {
    return {
      isRulesReaded: false,
    };
  },

  created() {
    this.$myLog()
  },

  methods: {
    closeModal() {
      this.$emit("close");
    },

    onScrollEnd() {
      this.isRulesReaded = true;
    },
  },
};
</script>

<style>
.modal {
  display: block;
}

.modal-body {
  height: 200px;
  overflow-y: scroll;
}
</style>
