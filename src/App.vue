<template>
 <router-link to="/">Home</router-link> | 
  <router-link to="/about">About</router-link> | 
  <router-link to="/signout">Sign Out</router-link> |
  <router-link to="/signin">Signin</router-link> |
  <router-link to="/register">Register</router-link> 
  <router-view></router-view>
  <Loading v-if="isLoading" :isLoading="isLoading" />
</template>

<script>
import Loading from './components/Loading.vue';

export default {
  components: {
    Loading,
  },
   data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    startLoading() {
      this.isLoading = true;
    },
    stopLoading() {
      this.isLoading = false;
    },
  },
};
</script>

