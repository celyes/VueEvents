<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h1 class="text-center my-5">Create an event</h1>
        <form>
          <div class="form-group">
            <label for="categorySelect"><small>Choose a category</small></label>
            <select class="form-control" id="categorySelect">
              <option selected disabled>Categories</option>
              <option v-for="cat in categories" :key="cat">{{cat}}</option>
            </select>
          </div>

          <div class="form-group">
            <label for="title"><small>Title</small></label>
            <input type="text" class="form-control" v-model="event.title" placeholder="Title...">
          </div>

          <div class="form-group">
            <label for="title"><small>When is this going to happen?</small></label>
            <Datepicker input-class="form-control" placeholder="Choose a date" />
          </div>
        </form>
      </div>
    </div>
    <!--<input type="number" v-model.number="incrementBy">
    <button @click="incrementID">increment by number</button>
    {{count}}-->
  </div>
</template>

<script>

import { mapState } from 'vuex'
import Datepicker from 'vuejs-datepicker'

export default {
  data () {
    return {
      incrementBy:0,
      event: {}
    }
  },
  computed: {
    ...mapState(['count', 'user', 'categories']),
  },
  methods: {
    incrementID: function() {
      this.$store.dispatch('updateCount', this.incrementBy);
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
