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
  },
  components: {
    HomePresenter,
  },
};
</script>

<template>
  <RouterView :model="model"/>
</template>

<style scoped>
.home {
  float: center;
  text-align: center;
}
</style>
