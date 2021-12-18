<template>
  <section class="intro">
    <div class="intro__grid">
      <div class="intro__col intro__content-col">
        <div class="intro__header">
          <a href="/" class="logo">
            <img src="@/assets/img/logo/logo.svg" alt="logo image" class="logo__img">
          </a>

          <nav class="intro__nav">
            <a href="#" @click.prevent="$router.push('/profile')" class="intro__nav-link text">
              Профиль
            </a>
            <a href="#" class="intro__nav-link text">
              Ссылка 3
            </a>
            <a href="#" class="intro__nav-link text">
              Ссылка 4
            </a>
          </nav>
        </div>

        <h2 class="intro__title">
          Ресурс № 1 для изучения <br>
          <span class="blue-text">татарского языка</span>
        </h2>

        <div class="text intro__text">
          Учиться с TatLearn весело и интересно. Прокачайте язык в новом формате - интересные игры ждут вас,
          развивайте навыки речи вместе с нами! Заинтересовали? Вступайте в наши ряды.
        </div>

        <div class="intro__buttons">
          <button class="btn" @click.prevent="$router.push('/login')">
            Авторизоваться
          </button>

          <button class="btn btn_light" @click.prevent="$router.push('/register')">
            Зарегестрироваться
          </button>
        </div>
      </div>

      <div class="intro__col intro__img-col">
        <img src="@/assets/img/intro/intro-bg.jpg" alt="intro image">
      </div>
    </div>

  </section>

  <section class="benefits">
    <div class="container">
      <h4 class="block-name">
        Преимущества
      </h4>

      <h2 class="title">
        Плюсы нашего сервиса
      </h2>

      <h3 class="subtitle">
        Добро пожаловать в удобное, быстрое и доступное тестирование знаний татарского языка!
        Мы даём возможность каждому пройти тест в комфортной обстановке и в желаемое время.
      </h3>

      <div class="benefits__grid">
        <div class="benefit">
          <div class="benefit__img-wrapper">
            <img src="@/assets/img/benefits/1.svg" alt="benefits image" class="benefit__img">
          </div>

          <div class="benefit__content">
            <h3 class="benefit__title">
              Быстрый прогресс
            </h3>

            <p class="text benefit__text">
              Наши курсы эффективно развивают навыки чтения, перевода и
              понимания татарского языка.
            </p>
          </div>
        </div>

        <div class="benefit">
          <div class="benefit__img-wrapper">
            <img src="@/assets/img/benefits/2.svg" alt="benefits image" class="benefit__img">
          </div>

          <div class="benefit__content">
            <h3 class="benefit__title">
              Индивидуальное обучение
            </h3>

            <p class="text benefit__text">
              Наши уроки сочетают лучшие достижения лингвистики. Мы балансируем сложность и темп обучения!

            </p>
          </div>
        </div>

        <div class="benefit">
          <div class="benefit__img-wrapper">
            <img src="@/assets/img/benefits/3.svg" alt="benefits image" class="benefit__img">
          </div>

          <div class="benefit__content">
            <h3 class="benefit__title">
              Стимул к учёбе
            </h3>

            <p class="text benefit__text">
              С нашим игровым подходом ежедневные занятия входят в привычку. Вам помогут наши забавные
              задания.
            </p>
          </div>
        </div>

        <div class="benefit">
          <div class="benefit__img-wrapper">
            <img src="@/assets/img/benefits/4.svg" alt="benefits image" class="benefit__img">
          </div>

          <div class="benefit__content">
            <h3 class="benefit__title">
              Нескучные уроки
            </h3>

            <p class="text benefit__text">
              Эффективное обучение не должно быть скучным! Интересные задания дают огромный стимул
              заниматься каждый день.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="stats">
    <div class="container">
      <h2 class="title stats__title">
        Ускорьте свой прогресс с TatLearn
      </h2>

      <h3 class="subtitle stats__subtitle">
        Наша миссия — сделать качественное обучение доступным всему Татарстану. <br>
        На нас лежит ответственность за успехи каждого.
      </h3>

      <div class="stats__grid">
        <div class="stats__col">
          <h3 class="stats__col-title">
            100%
          </h3>

          <p class="stats__col-text">
            Эффективность
          </p>
        </div>

        <div class="stats__col">
          <h3 class="stats__col-title">
            24/7
          </h3>

          <p class="stats__col-text">
            Поддержка
          </p>
        </div>

        <div class="stats__col">
          <h3 class="stats__col-title">
            3
          </h3>

          <p class="stats__col-text">
            Языковых игры
          </p>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <p class="footer__copyright">
        ©2021 TatLearn, Все права защищены.
      </p>

      <nav class="footer__nav">
        <a href="#" class="footer__nav-link">
          Ссылка 1
        </a>
        <a href="#" class="footer__nav-link">
          Ссылка 2
        </a>
        <a href="#" class="footer__nav-link">
          Ссылка 3
        </a>
        <a href="#" class="footer__nav-link">
          Ссылка 4
        </a>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>