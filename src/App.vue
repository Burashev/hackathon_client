<template>
  <div class="notification__block">
  </div>
  <router-view/>
  <NotificationBlock></NotificationBlock>
</template>

<script>
import NotificationBlock from "@/components/NotificationBlock";

export default {
  name: 'App',
  components: {NotificationBlock},

  created() {
    setInterval(() => {
      this.$store.dispatch('getUser');
    }, 1000)
  }
}
</script>

<style src="@/assets/css/main.css">
</style>
