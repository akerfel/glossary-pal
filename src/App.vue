<script>
import { RouterView } from "vue-router";
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
    window.myModel = this.model;
  },
  components: {},
};
</script>

<template>
  <RouterView :model="model" />
</template>

<style scoped></style>
