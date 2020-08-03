<template>
  <div v-if="open" class="modal-wrapper">
    <div class="modal-backdrop"></div>
    <div class="modal-box">
      <div class="stuff">
        <h1 class="role">{{ name }}</h1>
        <div class="info">
          <p class="description">
            <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut -->
            {{ description }}
          </p>
        </div>
        <div class="action">
          <button @click="close" class="close">Okay</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
      name: String,
      description: String,
      status: Boolean
  },
  data() {
    return {
        open: this.props.status
    }
  },
  methods: {
      close(){
          console.log('fuck')
          this.open = !this.open
      }
  }
};
</script>

<style lang="scss" scoped>
    @import '../styles/modal.scss';
</style>