<template>
  <div class="block">
    <div class="progress">
      <div class="progress-score">
        <span>{{ correctAnswers }}</span>/{{ totalQuestions }}
      </div>
      <div class="progress-bar"></div>
    </div>
    <div class="game-block" v-for="(round, idx) in gameData" :key="idx" v-show="currentRound === idx">
      <h1>{{ round.answer }}</h1>
      <h4> {{ round.question }}</h4>
      <button @click="trueCheck(round)">Верно</button>
      <button @click="falseCheck(round)">Не верно</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrueGame",
  data() {
    return {
      correctAnswers: 0,
      currentRound: 0,
    }
  },
  computed: {
    gameData() {
      return this.$store.state.gameData
    },
    totalQuestions() {
      return this.gameData.length
    }
  },
  methods: {
    trueCheck(round) {
      if (round.correct) {
        this.correctAnswers += 1;
      }
      else {

      }
      this.currentRound += 1;
    },
    falseCheck(round) {
      if (!round.correct) {
        this.correctAnswers += 1;
      }
      else {

      }
      this.currentRound += 1;
    }
  }
}
</script>

<style scoped>
.block {

}
</style>