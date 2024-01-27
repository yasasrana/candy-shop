<template>
    <div class="loading">
        <img src="../assets/gifs/spinner.gif" />
    
    </div>
  </template>
  
  <script>
  export default {
    name: 'Loading',
    props: {
    isLoading: Boolean,
  },
  };
  </script>
  
  <style scoped>
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
  