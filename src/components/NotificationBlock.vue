<template>
  <div class="notification__block">
    <AppNotification v-for="notification in notifications"
                     :key="notification.message"
                     :message="notification.message"
                     :class="notification.error ? 'error' : ''"
    ></AppNotification>
  </div>
</template>

<script>
import AppNotification from "@/components/AppNotification";

export default {
  name: "NotificationBlock",
  components: {AppNotification},
  computed: {
    notifications() {
      return this.$store.state.notifications.notifications
    }
  }
}
</script>

<style>

</style>