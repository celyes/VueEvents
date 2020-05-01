<template lang="html">
  <div>
    <h1>Events in your area</h1>
    <EventCard /> 
  </div>
</template>
<script>
import EventCard from '@/components/EventCard.vue';
  export default {
    components :{
      EventCard
    }
  }

</script>

<style scoped>

</style>
