<template lang="html">
  <div class="alert notification-bar" :class="notificationTypeClass">
    <h5>{{notification.message}}</h5>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timeout: null
    }
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 5000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  computed: {
    notificationTypeClass() {
      return `alert-${this.notification.type}`
    }
  },
  methods: {
    ...mapActions('notification', ['remove'])
  }
}
</script>

<style lang="css" scoped>
  .notification-bar {
    border-radius: 0;
    z-index: 999
  }
  .alert {
    margin-bottom: 0 !important;
  }
</style>
