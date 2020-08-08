<template>
  <div class="vote">
    <div class="profile">
      <div class="details">
        <div class="name">Jade</div>
        <div class="info">2 days to the end of voting</div>
      </div>
      <div class="dp">
        <img
          class="profile-pic"
          src="https://randomuser.me/api/portraits/med/women/31.jpg"
          alt="pic"
        />
      </div>
    </div>
    <hr class="line" />
    <div v-for="(position, i) in positions" :key="i" class="vote-card">
      <div class="prof-icon">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d="M7.725 2.146c-1.016.756-1.289 1.953-1.239 2.59.064.779.222 1.793.222 1.793s-.313.17-.313.854c.109 1.717.683.976.801 1.729.284 1.814.933 1.491.933 2.481 0 1.649-.68 2.42-2.803 3.334C3.196 15.845 1 17 1 19v1h18v-1c0-2-2.197-3.155-4.328-4.072-2.123-.914-2.801-1.684-2.801-3.334 0-.99.647-.667.932-2.481.119-.753.692-.012.803-1.729 0-.684-.314-.854-.314-.854s.158-1.014.221-1.793c.065-.817-.398-2.561-2.3-3.096-.333-.34-.558-.881.466-1.424-2.24-.105-2.761 1.067-3.954 1.929z"
          />
        </svg>
      </div>
      <div class="marker">
        <div class="label">
          <div class="name">{{ position.name }}</div>
          <div class="bubble-marker">vote</div>
        </div>
        <div class="check-mark">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.294 16.998c-.435 0-.847-.203-1.111-.553L3.61 11.724a1.392 1.392 0 01.27-1.951 1.392 1.392 0 011.953.27l2.351 3.104 5.911-9.492a1.396 1.396 0 011.921-.445c.653.406.854 1.266.446 1.92L9.478 16.34a1.39 1.39 0 01-1.12.656c-.022.002-.042.002-.064.002z"/></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vote",
  data(){
      return {
          positions: [
              {
                  name: 'CHAIRPERSON'
              },
              {
                  name: 'CHAIRPERSON'
              },
              {
                  name: 'CHAIRPERSON'
              },
              {
                  name: 'CHAIRPERSON'
              },
              {
                  name: 'CHAIRPERSON'
              },
              {
                  name: 'CHAIRPERSON'
              }, 
          ]
      }
  }
};
</script>

<style lang="sass" scoped>
    @import '../../styles/variables.scss'; 
    @import '../../styles/mobile/vote.scss';
</style>