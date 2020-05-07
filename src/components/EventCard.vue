<template>
  <div class="event-card">
    <router-link :to="{ name: 'event-show', params: { id: event.id } }">
      <div>
        <span><small>@ {{event.time}} on {{event.date}}</small></span>
        <h2>{{ event.title }}</h2>
        <span><small>{{event.attendees}} attending</small></span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    event: Object
  },

}
</script>

<style scoped>

.event-card{
  margin: auto;
  margin-bottom: 15px;
  width: 500px;
  border: 1px solid #ccc;
  border-radius: 15px;
  background-color: #fff;
  text-align: justify;
  padding: 15px;
}
a{
  color: #000;
  text-decoration: none;
}
h2{
  margin: 15px 0;
}
</style>
