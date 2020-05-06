<template lang="html">
  <div>
    <h1 class="my-5">Events in your area</h1>
      <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>
<script>
import EventCard from '@/components/EventCard.vue';
import EventSerice from '@/services/EventService.js';

export default {
  components :{
    EventCard
  },
  data() {
    return {
      events: []
    }
  },
  created() {
    EventSerice.getEvents()
    .then(response => {
      this.events = response.data
    })
    .catch(error => {console.error('There was an error: ' + error.message)})
  }
}

</script>

<style scoped>

</style>
