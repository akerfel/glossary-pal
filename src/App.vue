<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HomePresenter/>
</template>

<script>
import HomePresenter from './presenters/HomePresenter.vue'

export default {
  name: 'App',
  components: {
    HomePresenter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: black;
}
</style>
