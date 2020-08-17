import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MobileLogin from '../components/mobile/MobileLogin.vue'
import Login from '../components/Login'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/mobile-login',
    name: 'MobileLogin',
    component: MobileLogin
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
