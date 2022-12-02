<script>
import { RouterLink, RouterView } from "vue-router";
import HomePresenter from "./presenters/HomePresenter.vue";
import GlossaryModel from "./GlossaryModel.js";

export default {
  name: "App",
  data() {
    return {
      model: {},
    };
  },
  created() {
    this.model = new GlossaryModel();
    window.myModel=this.model;
  },
  components: {
    HomePresenter,
  },
};
</script>

<template>
  <RouterView :model="model" />
</template>

<style scoped>
</style>
