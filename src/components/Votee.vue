<template>
<div class="everything">
     <div v-for="(candidate, i) in candidates" :key="i" class="votee">
    <div style="display: flex;">
      <img class="picc" :src="candidate.url" alt="M" />
      <div class="details">
        <div class="name">{{candidate.name}}</div>
        <div class="desc">{{candidate.desc}}</div>
      </div>
    </div>
    <button @click="scroll" class="btn">vote for me</button>
  </div>
</div>
</template>

<script>
export default {
  name: "Votee",
  methods: {
      scroll(){
          const myEl = document.getElementById('voting')
          this.$smoothScroll({
              scrollTo: myEl
          })
      }
  },
  data(){
      return {
          candidates: [
              {
                  url: 'https://randomuser.me/api/portraits/med/women/31.jpg',
                  name: 'Jade Williams',
                  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              },
              {
                  url: 'https://randomuser.me/api/portraits/med/women/31.jpg',
                  name: 'Jade Williams',
                  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              },
              {
                  url: 'https://randomuser.me/api/portraits/med/women/31.jpg',
                  name: 'Jade Williams',
                  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              },
              {
                  url: 'https://randomuser.me/api/portraits/med/women/31.jpg',
                  name: 'Jade Williams',
                  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              },
              {
                  url: 'https://randomuser.me/api/portraits/med/women/31.jpg',
                  name: 'Jade Williams',
                  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              },
              {
                  url: 'https://randomuser.me/api/portraits/med/women/31.jpg',
                  name: 'Jade Williams',
                  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
              }
          ]
      }
  }
};
</script>

<style lang="sass" scoped>
@import '../styles/votee.scss';
</style>