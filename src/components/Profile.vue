<template>
  <AppHeader></AppHeader>
  <section class="profile">
    <div class="container">
      <div class="user">
        <div class="user__col user__info-col">
          <div class="user__avatar">
            <img src="@/assets/img/profile/avatar.jpg" alt="avatar image">
          </div>

          <div class="user__info">
            <h2 class="user__title">
              Себастьян Левандовский
            </h2>

            <p class="text user__text">Аккаунт создан 25 Августа, 2021</p>

          </div>
        </div>

        <div class="user__col">
          <button class="btn btn_light">Изменить имя</button>
        </div>
      </div>

      <div class="profile__grid">
        <div class="profile__col">
          <div class="profile__item">
            <div class="profile__item-header">
              <h3 class="profile__item-title">
                Доступные игры
              </h3>

              <p class="text profile__item-text">
                Выбирайте на свой вкус
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

                <div class="profile__game-item">
                  <div class="profile__game-icon">
                    <img src="@/assets/img/profile/book.svg" alt="verno-ne-verno">
                  </div>

                  <h3 class="profile__game-title">
                    С английского на русский
                  </h3>

                  <p class="text profile__game-text">
                    Выберите правильный перевод
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
                <li class="statistic-item">
                  <div class="statistic-item__col statistic-result">
                    <div class="statistic-result__img statistic-result__win-img">
                      V
                    </div>

                    <div class="statistic__game-result-wrapper">
                      <h4 class="statistic__game-name">
                        Верно не верно
                      </h4>

                      <p class="text statistic__result-score">
                        3 / 3
                      </p>
                    </div>

                  </div>

                  <div class="statistic-item__col statistic-item__date-col">
                    <div class="text statistic__date">
                      18.12.2021
                    </div>
                  </div>
                </li>

                <li class="statistic-item">
                  <div class="statistic-item__col statistic-result">
                    <div class="statistic-result__img statistic-result__lose-img">
                      L
                    </div>

                    <div class="statistic__game-result-wrapper">
                      <h4 class="statistic__game-name">
                        Верно не верно
                      </h4>

                      <p class="text statistic__result-score">
                        3 / 3
                      </p>
                    </div>

                  </div>

                  <div class="statistic-item__col statistic-item__date-col">
                    <div class="text statistic__date">
                      18.12.2021
                    </div>
                  </div>
                </li>

                <li class="statistic-item">
                  <div class="statistic-item__col statistic-result">
                    <div class="statistic-result__img statistic-result__win-img">
                      V
                    </div>

                    <div class="statistic__game-result-wrapper">
                      <h4 class="statistic__game-name">
                        Верно не верно
                      </h4>

                      <p class="text statistic__result-score">
                        3 / 3
                      </p>
                    </div>

                  </div>

                  <div class="statistic-item__col statistic-item__date-col">
                    <div class="text statistic__date">
                      18.12.2021
                    </div>
                  </div>
                </li>

                <li class="statistic-item">
                  <div class="statistic-item__col statistic-result">
                    <div class="statistic-result__img statistic-result__lose-img">
                      L
                    </div>

                    <div class="statistic__game-result-wrapper">
                      <h4 class="statistic__game-name">
                        Верно не верно
                      </h4>

                      <p class="text statistic__result-score">
                        3 / 3
                      </p>
                    </div>

                  </div>

                  <div class="statistic-item__col statistic-item__date-col">
                    <div class="text statistic__date">
                      18.12.2021
                    </div>
                  </div>
                </li>

                <li class="statistic-item">
                  <div class="statistic-item__col statistic-result">
                    <div class="statistic-result__img statistic-result__win-img">
                      V
                    </div>

                    <div class="statistic__game-result-wrapper">
                      <h4 class="statistic__game-name">
                        Верно не верно
                      </h4>

                      <p class="text statistic__result-score">
                        3 / 3
                      </p>
                    </div>

                  </div>

                  <div class="statistic-item__col statistic-item__date-col">
                    <div class="text statistic__date">
                      18.12.2021
                    </div>
                  </div>
                </li>

                <li class="statistic-item">
                  <div class="statistic-item__col statistic-result">
                    <div class="statistic-result__img statistic-result__lose-img">
                      L
                    </div>

                    <div class="statistic__game-result-wrapper">
                      <h4 class="statistic__game-name">
                        Верно не верно
                      </h4>

                      <p class="text statistic__result-score">
                        3 / 3
                      </p>
                    </div>

                  </div>

                  <div class="statistic-item__col statistic-item__date-col">
                    <div class="text statistic__date">
                      18.12.2021
                    </div>
                  </div>
                </li>

                <li class="statistic-item">
                  <div class="statistic-item__col statistic-result">
                    <div class="statistic-result__img statistic-result__win-img">
                      V
                    </div>

                    <div class="statistic__game-result-wrapper">
                      <h4 class="statistic__game-name">
                        Верно не верно
                      </h4>

                      <p class="text statistic__result-score">
                        3 / 3
                      </p>
                    </div>

                  </div>

                  <div class="statistic-item__col statistic-item__date-col">
                    <div class="text statistic__date">
                      18.12.2021
                    </div>
                  </div>
                </li>

                <li class="statistic-item">
                  <div class="statistic-item__col statistic-result">
                    <div class="statistic-result__img statistic-result__lose-img">
                      L
                    </div>

                    <div class="statistic__game-result-wrapper">
                      <h4 class="statistic__game-name">
                        Верно не верно
                      </h4>

                      <p class="text statistic__result-score">
                        3 / 3
                      </p>
                    </div>

                  </div>

                  <div class="statistic-item__col statistic-item__date-col">
                    <div class="text statistic__date">
                      18.12.2021
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
  components: { AppHeader }

}
</script>

<style scoped>

</style>