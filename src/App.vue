<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  },
  name: 'App',
}
</script>

<style>
body{
  height: auto;
  min-height: 100vw;
  display: block;
  position: relative;
  margin: 0;
  top:0 ;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
