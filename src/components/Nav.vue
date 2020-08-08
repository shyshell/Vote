<template>
  <div>
    <div class="smartphone"></div>
    <div class="desktop">
      <div class="nav">
        <div class="navstart">
          <h1 class="brand">VOTE</h1>
        </div>
        <div class="navcenter">
          <!-- <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 00.898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 002.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 003.115-.844l3.799 3.801a.953.953 0 001.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 014.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 01-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"/></svg> -->
          <input type="text" class="candidate" name="search" placeholder="Search Candidate" />
        </div>
        <div class="nav-end">
          <div @mouseover="drop = true" class="navprof">
            <!-- <p class="name">Lewis</p> -->
            <!-- <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.65 8.512c-2.28-4.907-3.466-6.771-7.191-6.693-1.327.027-1.009-.962-2.021-.587-1.01.375-.143.924-1.177 1.773-2.902 2.383-2.635 4.587-1.289 9.84.567 2.213-1.367 2.321-.602 4.465.559 1.564 4.679 2.219 9.025.607 4.347-1.613 7.086-4.814 6.527-6.378-.765-2.145-2.311-.961-3.272-3.027zm-3.726 8.083c-3.882 1.44-7.072.594-7.207.217-.232-.65 1.253-2.816 5.691-4.463 4.438-1.647 6.915-1.036 7.174-.311.153.429-1.775 3.116-5.658 4.557zm-1.248-3.494c-2.029.753-3.439 1.614-4.353 2.389.643.584 1.847.726 3.046.281 1.527-.565 2.466-1.866 2.095-2.904l-.016-.036c-.251.082-.508.171-.772.27z"/></svg> -->
            <div>
                <img class="prof" src="https://randomuser.me/api/portraits/med/men/45.jpg" alt="pic" />
                <div @mouseover="drop = true" @mouseleave="drop = false" v-if="drop" class="dropdown">
                  <div class="drop-title">
                    <img class="drop-prof" src="https://randomuser.me/api/portraits/med/men/45.jpg" alt="pic" />
                    <div class="details">
                      <div class="username">
                        Lewis
                      </div>
                      <div class="role">
                        # voter
                      </div>
                    </div>
                  </div>
                  <NavBar name="Logs" path="/settings"/>
                  <NavBar name="Comments" path="/settings"/>
                  <NavBar name="Help" path="/settings"/>
                  <NavBar name="Settings" path="/settings"/>
                  <NavBar name="Logout" path="/settings"/>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'

export default {
  name: "Nav",
  components: {
    NavBar
  },
  data(){
    return{
      drop: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/nav.scss";
// @import '../styles/common.scss'
</style>