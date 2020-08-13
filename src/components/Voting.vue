<template>
  <div class="vote">
    <div class="content">
      <div class="title">Vote for the Chairperson</div>
      <div class="more">Cancel</div>
    </div>
    <div class="voter">
      <Votee/>
    </div>
  </div>
</template>

<script>
import Votee from '../components/Votee'

export default {
  name: "Vote",
  components: {
      Votee
  }
};
</script>

<style lang="sass" scoped>
    @import '../styles/voting.scss';
    @import '../styles/common.scss';
</style>