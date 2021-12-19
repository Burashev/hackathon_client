<template>
  <AppHeader></AppHeader>
  <TrueGame v-if="id === '1'"></TrueGame>
  <TatRusGame v-if="id === '2'"></TatRusGame>
</template>

<script>
import TrueGame from "@/components/TrueGame";
import TatRusGame from "@/components/TatRusGame";
import AppHeader from "@/components/AppHeader";

export default {
  name: "Game",
  components: {TrueGame, TatRusGame, AppHeader},
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