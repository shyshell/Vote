<template>
  <div class="all">
    <div>
      <modal name="info" height="auto">
        <div class="window-header">{{name}}</div>
        <div class="info">
          <p class="message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet ipsa neque numquam cumque dolorem nesciunt nulla. Rem maxime fugit repellat accusamus accusantium minus! Eos a pariatur eius, iusto quibusdam assumenda.</p>
        </div>
      </modal>
      <!-- <Modal v-if="display" :name="name" :description="description" status="true"></Modal> -->
    </div>
    <div class="position">
      <h1 class="title">Positions</h1>
      <div class="content">
        <div
          @click="showModal(position.name, position.description)"
          v-for="(position, i) in positions"
          :key="i"
          class="posCard"
        >
          <p class="posCardName">
            {{position.name}}
            <br />
            <span class="description">{{position.description}}...</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Modal from './Modal'

export default {
  name: "Position",
  components: {
    // Modal,
  },
  data() {
    return {
      name: "",
      description: "",
      display: false,
      positions: [
        {
          name: "Chairperson",
          description: "Handles the chairs and stuff",
        },

        {
          name: "Chairperson",
          description: "Handles the chairs and stuff",
        },

        {
          name: "Chairperson",
          description: "Handles the chairs and stuff",
        },

        {
          name: "Someone",
          description: "Handles the chairs and stuff",
        },
      ],
    };
  },

  mount() {
    this.show();
  },

  methods: {
    showModal(name, description) {
      console.log(name);
      this.name = name;
      this.description = description;
      this.$modal.show("info");
    },

    show() {
      this.$modal.show("info");
    },

    hide() {
      this.$modal.hide("info");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/position.scss";
@import "../styles/common.scss";
@import "../styles/variables.scss";

.window-header {
  background-color: $paleGrey;
  height: 40px;
  text-align: center;
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: $darkGrey;
}

.info {
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;

  .message {
    font-size: 18px;
    color: $darkGrey;
    font-weight: 500;
  }
}
</style>