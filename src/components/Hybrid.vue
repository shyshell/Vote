<template>
  <div class="hybrid">
    <Success/>
    <div class="stats">
      <div class="toggles">
        <p class="title">Vote</p>
        <div class="more">More</div>
      </div>
      <div class="actions">
        <div v-for="(tab, i) in tabs" :key="i" class="voteCard">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M10 20a10 10 0 110-20 10 10 0 010 20zM7 6v2a3 3 0 106 0V6a3 3 0 10-6 0zm-3.65 8.44a8 8 0 0013.3 0 15.94 15.94 0 00-13.3 0z"
            />
          </svg>
          <p class="title2">
            {{tab.role}}
            <br />
            <br />
            <span class="subtitle">{{tab.message}}</span>
          </p>
          <button @click="scroll" class="vote-btn">Vote</button>
        </div>
      </div>
    </div>

    <div id="voting" class="vote">
      <div class="content">
        <div class="title">Vote for the Chairperson</div>
        <div class="more">Cancel</div>
      </div>
      <div class="voter">
        <Votee />
      </div>
    </div>
  </div>
</template>

<script>
import Votee from '../components/Votee';
import Success from '../components/notifications/Success'

export default {
  name: "Hybrid",
  components: {
      Votee,
      Success
  },
  methods: {
      scroll(){
          const myEl = document.getElementById('voting')

          this.$smoothScroll({
              scrollTo: myEl,
          })
      }
  },
  data(){
        return {
            tabs: [
                {
                    role: 'Chairperson',
                    message: 'Vote for the chairperson'
                },
                {
                    role: 'Chairperson',
                    message: 'Vote for the chairperson'
                },
                {
                    role: 'Chairperson',
                    message: 'Vote for the chairperson'
                },
                {
                    role: 'Chairperson',
                    message: 'Vote for the chairperson'
                },
                {
                    role: 'Chairperson',
                    message: 'Vote for the chairperson'
                },
                {
                    role: 'Chairperson',
                    message: 'Vote for the chairperson'
                },

            ]
        }
    }
};
</script>

<style lang="sass" scoped>
@import '../styles/hybrid.scss';
@import '../styles/common.scss'
</style>