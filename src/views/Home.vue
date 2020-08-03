<template>
  <div class="home">
    <div class="all">
      <Nav />
      <!-- <Modal/> -->
      <div class="mydata">
        <div class="first-column">
          <Profile candidatesCount="9" votersCount="599"></Profile>
          <Comments />
          <div class="pos">
            <Position />
          </div>
        </div>
        <div class="space"></div>
        <div class="second-column">
          <div class="first-section">
            <ProfileTwo />
            <CandidateList />
            <Stats />
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
import Stats from "../components/Stats";
import ProfileTwo from "../components/ProfileTwo";
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
    Stats,
  },
};
</script>

<style lang="scss">
@import "../styles/home.scss";
</style>