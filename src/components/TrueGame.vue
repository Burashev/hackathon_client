<template>
  <AppHeader></AppHeader>
  <section class="verno-ne-verno">
    <div class="container container_game">
      <h4 class="block-name">
        Верно не верно
      </h4>

      <div class="progress-row">
        <div class="progress-numbers">
          <span class="current-progress">{{ correctAnswers }}</span>
          /
          <span class="total-progress">{{ totalQuestions }}</span>
        </div>

        <div class="progress-bar">
        </div>
      </div>
      <div v-for="(round, idx) in gameData"
           :key="idx"
           v-show="idx === currentRound"
      >
        <div class="game-block">
          <h3 class="title word-to-translate">{{ round.question }}</h3>
          <h3 class="subtitle translate-word">
            {{ round.answer }}
          </h3>
        </div>

        <h3 class="subtitle is-correct-translate">Верен ли перевод?</h3>

        <div class="buttons-row">
          <button class="btn" @click="trueCheck(round)">
            Верно
          </button>

          <button class="btn btn_light" @click="falseCheck(round)">
            Не верно
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  name: "TrueGame",
  components: {AppHeader},

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
  watch: {
    currentRound: {
      handler() {
        if (this.currentRound === this.totalQuestions) {
          const statistic = {
            game_id: 1,
            score: this.correctAnswers,
            score_max: this.totalQuestions
          }
          this.$store.dispatch('addNotification',
              {
                message: `Вы набрали ${this.correctAnswers} правильных ответов из ${this.totalQuestions}`,
                error: this.correctAnswers <= this.totalQuestions - 2
              });
          this.$router.push('/profile');
          this.$store.dispatch('addUserStatistic', statistic);
        }
      }
    }
  },
  methods: {
    trueCheck(round) {
      if (round.correct) {
        this.correctAnswers += 1;
      } else {

      }
      this.currentRound += 1;
    },
    falseCheck(round) {
      if (!round.correct) {
        this.correctAnswers += 1;
      } else {

      }
      this.currentRound += 1;
    }
  }
}
</script>

<style scoped>
</style>