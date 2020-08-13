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
    <button class="btn">vote for me</button>
  </div>
</div>
</template>

<script>
export default {
  name: "Votee",
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