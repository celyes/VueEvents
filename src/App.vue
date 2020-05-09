<template>
  <div id="app">
    <NavBar />

    <NotificationContainer />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>
<script>


export default {
  name: 'App',
}
</script>

<style>
body{
  height: auto;
  min-height: 100vh;
  display: block;
  position: relative;
  margin: 0;
  top:0 ;
}
#app {
  font-family: 'ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
