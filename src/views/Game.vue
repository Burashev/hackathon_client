<template>
<TrueGame v-if="id === '1'"></TrueGame>
</template>

<script>
import TrueGame from "@/components/TrueGame";
export default {
  name: "Game",
  components: {TrueGame},
  props: ['id'],
  created() {
    this.$store.dispatch('loadGameData', this.id);
  },
  computed: {
    gameData() {
      return this.$store.state.gameData
    }
  }
}
</script>

<style scoped>

</style>