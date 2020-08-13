import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VModal from 'vue-js-modal'
import VueSmoothScroll from 'vue2-smooth-scroll'

Vue.config.productionTip = false

Vue.use(VModal)
Vue.use(VueSmoothScroll)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
