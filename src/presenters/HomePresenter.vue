<script>
import HomeView from "../views/HomeView.vue"
import GlossaryModel from "@/GlossaryModel";
export default {
  // In order to access the View 
  // in the Template
  components: {HomeView},
  data() {
    return {
      wordLists: this.model.wordLists,
    };
  },
  props: {
    model: GlossaryModel
  }
};
</script>

<template>
  <HomeView :wordLists="wordLists"/>
</template>