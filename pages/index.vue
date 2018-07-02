<template>
  <section class="container">
    <div>
      <h1 class="title">
        A simple Chat App
      </h1>
      <p class="description">
        A recreation of Socket.io's <a href="https://socket.io/get-started/chat/">Get Started: Chat Application</a> using <a href="https://hapijs.com/">hapi.js</a> and <a href="https://nuxtjs.org/">Nuxt.js</a>.
      </p>
      <h2 class="subtitle">
        Click the button below
      </h2>
      <div class="links">
        <a href="http://localhost:3000/chat" class="button--grey">Chat</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.description {
  font-size: 34px;
  color: #35495e;
  margin: 30px 0;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
