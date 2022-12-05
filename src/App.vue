<script>
import GlossaryModel from "./GlossaryModel.js";
import AppView from "./views/AppView.vue";

export default {
  name: "App",
  methods: {
    goToHomeACB() {
      this.$router.push("/")
    }
  },
  data() {
    return {
      model: {},
    };
  },
  created() {
    this.model = new GlossaryModel();
    window.myModel = this.model;
  },
  components: { AppView },
};
</script>

<template>
  <AppView :model="model" :onGoToHome="goToHomeACB"/>
</template>

<style scoped>
.banner {
  align-self: flex-end;
}
</style>
