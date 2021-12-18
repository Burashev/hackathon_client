<template>
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
    }, 5000)
  }
}
</script>

<style src="@/assets/css/main.css">
</style>
