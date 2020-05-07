<template lang="html">
  <div>
    <h1 class="my-5">Events in your area</h1>
      <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>
<script>

import { mapState } from 'vuex'
import EventCard from '@/components/EventCard.vue';

export default {
  components :{
    EventCard
  },
  created() {
    this.$store.dispatch('fetchEvents');
  },
  computed: mapState(['events'])
}

</script>

<style scoped>

</style>
