import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Register from '../views/Register.vue'
import ProductDetails from '../views/Product_Details.vue'
import Functions from '../views/Functions.vue'
import Signin from '../views/Signin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/signin',
    name: 'Sign in',
    component: Signin
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/functions',
    name: 'functions',
    component: Functions
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
