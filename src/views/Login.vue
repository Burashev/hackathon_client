<template>
  <section class="form-page login">

    <a href="/" class="logo" @click.prevent="$router.push('/')">
      <img src="@/assets/img/logo/logo.svg" alt="logo image" class="logo__img">
    </a>

    <h2 class="title">
      Войдите в аккаунт
    </h2>

    <form class="form" @submit.prevent="formSubmit">
      <label for="email" class="label">Почта</label>
      <input type="text" id="email" class="input" v-model="user.email">

      <label for="password" class="label">Пароль</label>
      <input type="password" id="password" class="input" v-model="user.password">

      <button class="btn">
        Войти
      </button>

    </form>
  </section>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    formSubmit() {
      this.$store.dispatch('loginUser', this.user)
          .then(() => {
            this.$router.push('/profile');
          });
    }
  }
}
</script>

<style scoped>

</style>