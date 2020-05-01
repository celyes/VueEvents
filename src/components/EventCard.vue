<template>
  <article>
    <span v-for="event in events" :key="event.id">
      <router-link :to="{ name: 'event-show', query: { id: event.id } }">
        <div>
          <span><small>@ {{event.time}} on {{event.date}}</small></span>
          <h2>{{ event.title }}</h2>
          <span><small>{{event.attendees.length}} attending</small></span>
        </div>
      </router-link>
    </span>
  </article>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          id: 1,
          title: 'Beach cleanup',
          date: 'Tuesday, August 1st 2020',
          time: '8:00',
          attendees: [
            {id: 'abc123', name: 'Ilyes Chouia'},
            {id: 'def456', name: 'Yacine Ben Mohamed'},
          ]
        },
        {
          id: 2,
          title: 'Collective lunch',
          date: 'Monday, August 5th 2020',
          time: '11:00',
          attendees: [
            {id: 'abc123', name: 'Ilyes Chouia'},
            {id: 'def456', name: 'Yacine Ben Mohamed'},
            {id: 'ghi789', name: 'Israa Farah'},
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

div{
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
