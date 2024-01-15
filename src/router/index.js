import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Signin from '../views/Signin.vue'
import SignOUt from '../views/SignOut.vue'
import Register from '../views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/signin',
    name: 'Sign in',
    component: Signin
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/signout',
    name: 'signout',
    component: SignOUt
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
