<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h1 class="text-center my-5">Create an event</h1>
        <form @submit.prevent="createNewEvent">
          <div class="form-group">
            <label for="categorySelect"><small>Choose a category</small></label>
            <select class="form-control" id="categorySelect" v-model="event.category">
              <option selected disabled>{{event.category}}</option>
              <option v-for="cat in categories" :key="cat">{{cat}}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="title"><small>Title</small></label>
            <input type="text" class="form-control" v-model="event.title" :placeholder="event.title">
          </div>

          <div class="form-group">
            <label for="date"><small>When is this going to happen?</small></label>
            <Datepicker input-class="form-control" placeholder="Choose a date" v-model="event.date" />
          </div>

          <div class="form-group">
            <label for="time"><small>At what time?</small></label>
            <select class="form-control" id="time"  v-model="event.time">
              <option selected disabled>{{event.time}}</option>
              <option v-for="time in times" :key="time">{{time}}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="description"><small>Description</small></label>
            <textarea class="form-control" v-model="event.description" :placeholder="event.description"></textarea>
          </div>

          <div class="form-group">
            <label for="attendees"><small>Number of expected attendees: {{ event.attendees ? event.attendees : '5' }}</small></label>
            <input type="range" class="custom-range" v-model.number="event.attendees" value="event.attendees" min="5" max="10000" step="5">
          </div>
          <div class="form-group">
            <button class="btn btn-primary" type="submit">Add event</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
import Datepicker from 'vuejs-datepicker'


export default {
  data () {
    const times = [];
    for(let i = 1; i < 24; i++){
      times.push(i+":00");
    }
    return {
      times,
      event: this.createFreshEventObject()
    }
  },
  computed: {
    ...mapState(['user', 'categories']),
  },
  methods: {
    ...mapActions('event', ['createEvent']),
    createNewEvent: function(){
      this.createEvent(this.event)
      .then(() => {
        this.$router.push({ name: 'event-show', params: { id: this.event.id } })
        this.event = this.createFreshEventObject();
      })
      .catch(() => { console.error('There was a problem!') })
    },
    createFreshEventObject: function() {
      return {
        user: this.$store.state.user.user,
        id: Math.floor(Math.random() * 10000000),
        title: 'Type in the title',
        category: 'Select a category',
        description: 'Describe the event',
        attendees: 5,
        date: '',
        time: 'When?'

      }
    }
  },
  components: {
    Datepicker
  }
}
</script>

<style lang="css" scoped>

.container {
  margin: auto;
  text-align: justify;
  padding: 15px;
}
select {
  width: 100%;
  height: 40px;
  margin-bottom: 20px
}
</style>
