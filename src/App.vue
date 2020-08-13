<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  scroll-behavior: smooth;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f2f5f7;
  background-size: cover;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
