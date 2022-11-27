<template>
  <HomePresenter :model="model"/>
</template>

<script>
import HomePresenter from './presenters/HomePresenter.vue'
import GlossaryModel from './GlossaryModel.js'
export default {
  name: 'App',
  data() { return {
                model: {},
            };
    },
    created() {
      this.model = new GlossaryModel()
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
  background-color: rgb(227, 107, 107);
}
</style>