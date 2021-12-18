<template>
<ul>
  <li v-for="game in games">
    <a href="#" @click="this.$router.push('/game/' + game.id)">{{ game.title }}</a>
  </li>
</ul>
</template>

<script>
export default {
  name: "Games",
  created() {
    this.$store.dispatch('loadGames');
  },
  computed: {
    games() {
      return this.$store.state.games
    }
  }
}
</script>

<style scoped>

</style>