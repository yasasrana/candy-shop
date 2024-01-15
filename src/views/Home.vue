<template>
  <div class="home">
    <HelloWorld msg="Vue JS and Vite"/>
    <h1 class="text-3xl text-red-700 font-bold underline">heloooooo</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
