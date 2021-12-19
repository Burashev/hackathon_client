<template>
  <header>
    <div class="container">
      <a href="/" class="logo">
        <img src="@/assets/img/logo/logo.svg" alt="logo image" class="logo__img" @click.prevent="$router.push('/')">
      </a>

      <nav class="header__nav-main">
        <a href="#" @click.prevent="$router.push('/game/1')">Игра 1</a>
        <a href="#" @click.prevent="$router.push('/game/2')">Игра 2</a>
        <a href="#" @click.prevent="$router.push('/game/3')">Игра 3</a>
      </nav>

      <nav class="header__nav-auth">
        <a href="#" @click.prevent="$router.push('/profile')">Профиль</a>
        <a href="#" class="btn exit-btn" @click.prevent="logout">Выход</a>
      </nav>

    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  methods: {
    logout() {
      this.$store.dispatch('logoutUser');
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

</style>