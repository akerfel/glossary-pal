<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HomePresenter :word="word"/>
</template>

<script>
import HomePresenter from './presenters/HomePresenter.vue'
import GlossaryModel from './GlossaryModel.js'
export default {
  name: 'App',
  data() { return {
                model: {},
                word: {},
            };
    },
    created() {
      this.model = new GlossaryModel("some text")
      this.word = this.model.word
    },
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