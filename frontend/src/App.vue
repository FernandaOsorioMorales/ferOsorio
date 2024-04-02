<template>
  <div id="app">
    <landingpage/>
  </div>
</template>

<script>
import landingpage from './components/landingpage.vue';

export default {
  name: 'App',
  components: {
    landingpage
  }
}
</script>

<style>
*, *::before, *::after {
  font-family: 'Sen', sans-serif;
}
#app {
  background-color: #F6DBEA;  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>