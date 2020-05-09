<template lang="html">
  <div class="notification-container">
    <NotificationBar
    v-for="notification in notifications"
    :key="notification.id"
    :notification="notification" />
  </div>
</template>

<script>

import NotificationBar from '@/components/NotificationBar.vue'
import { mapState } from 'vuex'
export default {
  components: {
    NotificationBar
  },
  computed: mapState('notification', ['notifications'])
}
</script>

<style lang="css" scoped>
.notification-container{
  display: block;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999
}
</style>
