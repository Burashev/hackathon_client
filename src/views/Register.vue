<template>
  <section class="form-page register">

    <a href="/" class="logo" @click.prevent="$router.push('/')">
      <img src="@/assets/img/logo/logo.svg" alt="logo image" class="logo__img">
    </a>

    <h2 class="title">
      Зарегистрируйте аккаунт
    </h2>

    <form class="form" @submit.prevent="formSubmit">
      <label for="email" class="label">Почта</label>
      <input type="text" id="email" class="input" v-model="user.email">

      <label for="password" class="label">Пароль</label>
      <input type="password" id="password" class="input" v-model="user.password">

      <label for="passwordRepeat" class="label">Повтор пароля</label>
      <input type="password" id="passwordRepeat" class="input" v-model="user.password_repeat">

      <button class="btn">
        Зарегестрироваться
      </button>

    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
        password_repeat: ''
      }
    }
  },
  methods: {
    formSubmit() {
      this.$store.dispatch('registerUser', this.user)
      .then(() => {
        this.$router.push('/');
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  name: "Register"
}
</script>

<style scoped>

</style>