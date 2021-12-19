<template>
  <section class="verno-ne-verno">
    <div class="container container_game">

      <h4 class="block-name">
        Верно не верно на двоих
      </h4>

      <div class="players-row">
        <div class="player first-player " :class="!player ? 'player-active' : ''">
          P1
        </div>

        <div class="player" :class="player ? 'player-active' : ''">
          P2
        </div>

      </div>

      <div v-for="(round, idx) in gameData"
           :key="idx"
           v-show="idx === currentRound1 && !player"
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
      <div v-for="(round, idx) in gameData2"
           :key="idx"
           v-show="idx === currentRound2 && player"
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
export default {
  name: "TwoTrueGame",
  data() {
    return {
      correctAnswers1: 0,
      correctAnswers2: 0,
      currentRound1: 0,
      currentRound2: 0,
      player: 0,
    }
  },
  computed: {
    gameData() {
      return JSON.parse(JSON.stringify(this.$store.state.gameData))
    },
    gameData2() {
      return this.$store.state.gameData
    },
    totalCount() {
      return this.gameData.length;
    }
  },
  watch: {
    currentRound2: {
      handler() {
        if (this.currentRound2 === this.totalCount) {
          this.$store.dispatch('addNotification',
              {
                message: `Игрок 1 набрал ${this.correctAnswers1} правильных ответов;
                Игрок 2 набрал ${this.correctAnswers2} правильных ответов.`,
                error: false
              });
          this.$router.push('/profile');
        }
      }
    }
  },
  methods: {
    trueCheck(round) {
      if (round.correct) {
        if (this.player) {
          this.correctAnswers2 += 1;
        }
        else this.correctAnswers1 += 1;
      } else {

      }
      if (this.player) {
        this.currentRound2 += 1;
      }
      else this.currentRound1 += 1;

      this.player = this.player ? 0 : 1;

    },
    falseCheck(round) {
      if (!round.correct) {
        if (this.player) {
          this.correctAnswers2 += 1;
        }
        else this.correctAnswers1 += 1;
      } else {

      }
      if (this.player) {
        this.currentRound2 += 1;
      }
      else this.currentRound1 += 1;

      this.player = this.player ? 0 : 1;
    }
  }
}
</script>

<style scoped>

</style>