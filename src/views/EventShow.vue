<template lang="html">
  <div>
    <h1 class="my-5">{{event.title}}</h1>
    <div class="card">
      <span>
        <small>{{event.date}} on {{event.time}}</small>
        <br><br>
        <small>{{event.attendees}} are going</small>
      </span>
      <p class="description"><strong>Description:</strong><br>{{event.description}}</p>
    </div>
  </div>
</template>
<script>

import { mapState, mapActions } from 'vuex'

export default {
  props: ['id'],
  created() {
    this.fetchEvent(this.id);
  },
  computed: {
    ...mapState({ event: state => state.event.event })
  },
  methods: {
    ...mapActions('event', ['fetchEvent'])
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
