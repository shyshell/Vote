<template>
    <div :class="status">
        <div class="drop-title">
          <img class="drop-prof" src="https://randomuser.me/api/portraits/med/men/45.jpg" alt="pic" />
          <div class="details">
            <div class="first">
              <div>
                <div class="username">Lewis</div>
              <div class="role"># voter</div>
              </div>
            </div>
            <div class="second">
              <svg @click="closeMenu" class="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.348 14.849a1.2 1.2 0 01-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 11-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 111.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 111.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 010 1.698z"/></svg>
            </div>
          </div>
        </div>
        <NavBar name="Dashboard" status="selected" path="/settings" />
        <NavBar name="Comments" status="not-selected" path="/settings" />
        <NavBar name="Logs" status="not-selected" path="/settings" />
        <NavBar name="Help" status="not-selected" path="/settings" />
        <NavBar name="Settings" status="not-selected" path="/settings" />
        <NavBar name="Logout" status="not-selected" path="/settings" />
    </div>
</template>

<script>
import NavBar from '../NavBar'

export default {
    name: 'Menu',
    props: {
        status: String
    },
    components: {
        NavBar
    },
    methods: {
        closeMenu(){
            this.status = 'dropdown-menu hide'
        }
    }
}
</script>

<style lang="sass" scoped>
    @import '../../styles/mobile/menu.scss'
</style>