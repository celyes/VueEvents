<template>
  <div class="nav">
    <router-link class="navbar-brand" :to="{ name: 'home'}">Real World Vue</router-link>
    <nav>
      <ul>
        <li><router-link :to="{ name: 'event-create' }">Create an event</router-link></li>
        <li><router-link :to="{ name: 'event-list' }">List all events</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar-brand{
  position: absolute;
  display: inline-block;
  left: 25px;
  line-height: 60px;
  font-size: 22px;
  font-weight: 700;
  color: #0f30f4;
  text-decoration: none;
}
nav{
  line-height: 40px;
}
.nav {
  position: relative;
  display: block;
  padding: 0 15px;
  background: #f9f9f9;
  height: 60px;
}
.nav ul{
  margin: 0;
  padding: 0;
}
.nav li{
  display: inline-block;
  padding: 10px;
}
.nav li a{
  text-decoration: none;
  color: #000;
}
.nav li a:hover{
  color: #f00;
}
</style>
