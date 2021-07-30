<template>
  <div class="user-page">
    <button
      type="button"
      class="btn btn-primary"
      @click="isModalOpen = !isModalOpen"
    >
      Отправить что-нибудь
    </button>
    <Modal
      v-if="isModalOpen"
      title="Пользовательское соглашение"
      @close="isModalOpen = false"
    >
      <div class="info">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non alias ea
          velit nam nulla placeat. Recusandae rem, dignissimos facere at fuga
          expedita illum cum? Quis repudiandae velit aut unde suscipit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non alias ea
          velit nam nulla placeat. Recusandae rem, dignissimos facere at fuga
          expedita illum cum? Quis repudiandae velit aut unde suscipit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non alias ea
          velit nam nulla placeat. Recusandae rem, dignissimos facere at fuga
          expedita illum cum? Quis repudiandae velit aut unde suscipit!
        </p>
      </div>

      <!-- Передача в конкретный слот -->
      <!-- <template v-slot:footer>
        <button class="btn btn-secondary">
          Отмена 1
        </button>
        <button class="btn btn-primary">Сохранить 1</button>
      </template> -->
    </Modal>
  </div>
</template>

<script>
import Modal from "./Modal";
export default {
  name: "modal",
  components: { Modal },
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {},
};
</script>
