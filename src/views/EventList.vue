<template lang="html">
  <div>
    <h1 class="my-5">Events in your area</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
    <template v-if="page!=1">
      <router-link :to="{ name: 'event-list', query: {page: page - 1} }" rel="prev">Previous</router-link>
    </template>
    <template v-if="total">
      <router-link :to="{ name: 'event-list', query: {page: page + 1} }" rel="next">Next</router-link>
    </template>
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
    this.$store.dispatch('fetchEvents', {
      perPage: 2,
      page: this.page
    })
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    total() {
      return (this.eventsTotal >= this.page * 2)
    },
    ...mapState(['events', 'eventsTotal'])
  }
}

</script>

<style scoped>
.router-link-active{
  padding: 15px;
  color: #000;
}
</style>
