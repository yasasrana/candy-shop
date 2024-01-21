import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Signin from '../views/Signin.vue'
import ProductDetails from '../views/Product_Details.vue'
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
    path: '/product/:productId',
    name: 'product-details',
    component: ProductDetails,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
