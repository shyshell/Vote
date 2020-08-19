<template>
  <div class="home">
    <div class="mobile-ui">
      <Vote />
    </div>
    <div class="all">
      <Nav />
      <div class="mydata">
        <!-- <Success/> -->
        <!-- scraped until i can figure out a way 
        to display dynamic global toasts without spaghetti code-->

        <!-- todo: make spaghetti after this -->

        <div class="first-column">
          <Profile candidatesCount="9" votersCount="599"></Profile>
          <div class="pos">
            <Position />
          </div>
          <Comments />
        </div>
        <div class="space"></div>
        <div class="second-column">
          <div class="first-section">
            <Logs />
            <ProfileTwo />
            <CandidateList />
            <Hybrid/>
          </div>
          <div class="space"></div>
          <div class="second-section">
            <div class="pos-two">
              <Position />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import Profile from "../components/Profile";
import Nav from "../components/Nav";
import CandidateList from "../components/CandidateList";
import Position from "../components/Position";
import Comments from "../components/Comments";
import ProfileTwo from "../components/ProfileTwo";
import Vote from "../components/mobile/Vote";
import Logs from "../components/Logs";
import Hybrid from "../components/Hybrid"
// import Success from '../components/notifications/Success'
// import Modal from '../components/Modal'

export default {
  name: "Home",
  components: {
    // HelloWorld
    Profile,
    Nav,
    // Modal,
    CandidateList,
    Position,
    Comments,
    ProfileTwo,
    Vote,
    Logs,
    Hybrid,
    // Success
  },
};
</script>

<style lang="scss">
@import "../styles/home.scss";
</style>