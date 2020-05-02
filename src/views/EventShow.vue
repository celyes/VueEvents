<template lang="html">
  <div>
    <h1>{{event.title}}</h1>
    <div class="card">
      <span>
        <small>{{event.date}} on {{event.time}}</small>
        <br><br>
        <small>{{event.attendees.length}} are going</small>
      </span>
      <p class="description"><strong>Description:</strong><br>{{event.description}}</p>
    </div>
  </div>
</template>
<script>

import EventService from '@/services/EventService.js'

export default {
  props: ['id'],
  data(){
    return {
      event: {}
    }
  },
  created() {
    EventService.getEvent(this.id)
    .then(response => {this.event = response.data; console.log(response.data) })
    .catch(error => {console.error(error)});
  }
}

</script>

<style scoped>
h1{
  font-size: 48px;
}
.card{
  display: block;
  position: relative;
  width: 800px;
  margin: auto;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 15px;
  text-align: left;
}
.description{
  line-height: 2rem;
}
.description strong{
  font-size: 20px;
  line-height: 3rem;
}
</style>
