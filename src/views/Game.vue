<template>
  <AppHeader></AppHeader>
  <TrueGame v-if="id === '1'"></TrueGame>
  <TatRusGame v-if="id === '2'"></TatRusGame>
  <TwoTrueGame v-if="id === '3'"></TwoTrueGame>
</template>

<script>
import TrueGame from "@/components/TrueGame";
import TatRusGame from "@/components/TatRusGame";
import AppHeader from "@/components/AppHeader";
import TwoTrueGame from "@/components/TwoTrueGame";

export default {
  name: "Game",
  components: { TrueGame, TatRusGame, AppHeader, TwoTrueGame},
  props: ['id'],
  created() {
    // костыль
    if (this.id === '3') {
      this.$store.dispatch('loadGameData', 1);
      return null;
    }
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