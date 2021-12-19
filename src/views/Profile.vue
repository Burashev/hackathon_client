<template>
  <AppHeader></AppHeader>
  <section class="profile">
    <div class="container">
      <div class="user">
        <div class="user__col user__info-col">
          <div class="user__avatar">
            <img :src="user?.avatar" alt="avatar image">
          </div>

          <div class="user__info">
            <h2 class="user__title">
              <input type="text" v-model="fullName" v-if="fullnameEdit" class="input">
              <span v-if="!fullnameEdit">{{ user?.fullname }}</span>
            </h2>

            <p class="text user__text">Аккаунт создан 25 Августа, 2021</p>

          </div>
        </div>

        <div class="user__col">
          <button class="btn" :class="fullnameEdit ? '' : 'btn_light'" @click="changeFullname">{{ fullnameEdit ? 'Сохранить имя' : 'Изменить имя' }}</button>
        </div>
      </div>

      <div class="profile__grid">
        <div class="profile__col">
          <div class="profile__item">
            <div class="profile__item-header">
              <h3 class="profile__item-title">
                Игры на одного
              </h3>

              <p class="text profile__item-text">
                Развивайтесь индивидуально
              </p>
            </div>

            <div class="profile__item-body">
              <div class="profile__games-grid">
                <div class="profile__game-item" @click="$router.push('/game/1')">
                  <div class="profile__game-icon">
                    <img src="@/assets/img/profile/verno-ne-verno.svg" alt="verno-ne-verno">
                  </div>

                  <h3 class="profile__game-title">
                    Верно не верно
                  </h3>

                  <p class="text profile__game-text">
                    Угадайте, верный ли перевод слова вам предложен
                  </p>
                </div>

                <div class="profile__game-item" @click="$router.push('/game/2')">
                  <div class="profile__game-icon">
                    <img src="@/assets/img/profile/book.svg" alt="verno-ne-verno">
                  </div>

                  <h3 class="profile__game-title">
                    С татарского на русский
                  </h3>

                  <p class="text profile__game-text">
                    Выберите правильный перевод
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="profile__item">
            <div class="profile__item-header">
              <h3 class="profile__item-title">
                Игры на двоих
              </h3>

              <p class="text profile__item-text">
                Соревнуйтесь с друзьями
              </p>
            </div>

            <div class="profile__item-body">
              <div class="profile__games-grid">
                <div class="profile__game-item" @click.prevent="$router.push('/game/3')">
                  <div class="profile__game-icon">
                    <img src="@/assets/img/profile/two-persons.svg" alt="verno-ne-verno">
                  </div>

                  <h3 class="profile__game-title">
                    Верно не верно на двоих
                  </h3>

                  <p class="text profile__game-text">
                    Узнайте, кто из вас знает татарский лучше!
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div class="profile__col">
          <div class="profile__item">
            <div class="profile__item-body">
              <h3 class="profile__item-title">
                Статистика
              </h3>

              <ul class="statistic-list">
                <li class="statistic-item" v-for="stat in statistic">
                  <div class="statistic-item__col statistic-result">
                    <div class="statistic-result__img" :class="+stat.score >= stat.score_max - 2 ? 'statistic-result__win-img' : 'statistic-result__lose-img'">
                      V
                    </div>

                    <div class="statistic__game-result-wrapper">
                      <h4 class="statistic__game-name">
                        {{ stat.game_title }}
                      </h4>

                      <p class="text statistic__result-score">
                        {{ stat.score }} / {{ stat.score_max }}
                      </p>
                    </div>

                  </div>

                  <div class="statistic-item__col statistic-item__date-col">
                    <div class="text statistic__date">
                      {{ stat.date }}
                    </div>
                  </div>
                </li>

              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  name: "Profile",
  data() {
    return {
      fullName: '',
      fullnameEdit: false
    }
  },
  components: { AppHeader },
  computed: {
    user() {
      return this.$store.state.user;
    },
    statistic() {
      return this.$store.state.statistic;
    }
  },
  methods: {
    changeFullname() {
      if (!this.fullnameEdit) {
        this.fullnameEdit = true;
        this.fullName = this.user.fullname;
        return null;
      }
      this.fullnameEdit = false;
      this.$store.dispatch('changeUserFullname', this.fullName)
      this.$store.dispatch('getUser');
    }
  },
  created() {
    this.$store.dispatch('getUser');
    this.$store.dispatch('getUserStatistic');
  }
}
</script>

<style scoped>

</style>