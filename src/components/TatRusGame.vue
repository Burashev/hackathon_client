<template>
  <section class="tat-rus">
    <div class="container container_game">
      <h4 class="block-name">
        С татарского на русский
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

      <div class="tat-rus-game"
           v-for="(data, idx) in gameData"
           :key="data.question"
           v-show="currentRound === idx"
      >
        <div class="tat-rus-game__col tat-rus-game__word-col">
          <audio
              style="display: none"
              :src='"https://translate.tatar/byhackathon_synthesize?text=" + data.question'
              ref="audio"
          ></audio>
          <div class="sound-icon" @click.prevent="playSound">
            <img src="@/assets/img/tat-rus/sound.svg" alt="sound image">
          </div>
          <div class="game-block">
            <h3 class="title">{{ data.question }}</h3>
          </div>

        </div>

        <div class="tat-rus-game__col">
          <ul class="numeric-list">
            <li class="numeric-list__item"
                v-for="(answer, idx) in data.answers"
                :key="idx"
                @click="checkAnswer(answer)"
                :class="{
                  'numeric-list__item-true': answer.success,
                  'numeric-list__item-false': answer.error
                }"
            >
              <div class="numeric-list__number">
                {{ idx }}
              </div>

              <div class="numeric-list__text">
                {{ answer.answer }}
              </div>
            </li>


          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TatRusGame",
  data() {
    return {
      correctAnswers: 0,
      currentRound: 0,
      checked: false,
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
            game_id: 2,
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
    checkAnswer(answer) {
      if (this.checked) return null;
      this.checked = true;

      if (answer.correct) {
        answer.success = true;
        this.correctAnswers += 1;
      } else answer.error = true;

      setTimeout(() => {
        this.currentRound += 1;
        this.checked = false;
      }, 1500);
    },
    playSound() {
      this.$refs.audio[this.currentRound].play();
    }
  }
}
</script>

<style scoped>

</style>