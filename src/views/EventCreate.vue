<template lang="html">
  <div>
    <h1>Create an event</h1>
    <div class="container">
      <Datepicker placeholder="select a date"></Datepicker>
    </div>
  </div>
</template>

<script>

import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Datepicker
  }
}
</script>

<style lang="css" scoped>

.container{
  margin: auto;
  margin-bottom: 15px;
  width: 500px;
  border: 1px solid #ccc;
  border-radius: 15px;
  background-color: #fff;
  text-align: justify;
  padding: 15px;
}

</style>
