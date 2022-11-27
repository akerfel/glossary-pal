<script>
import HomeView from "../views/HomeView.vue"
import GlossaryModel from "@/GlossaryModel";
export default {
  // In order to access the View 
  // in the Template
  components: {HomeView},
  data() {
    return {
      listNames: this.model.getListNames(),
    };
  },
  props: {
    model: GlossaryModel
  }
};
</script>

<template>
  <HomeView :listNames="listNames"/>
</template>