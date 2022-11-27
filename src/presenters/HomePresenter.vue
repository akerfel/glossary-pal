// Presenter.vue
<script>
import HomeView from "../views/HomeView.vue"
export default {
  // In order to access the View 
  // in the Template
  components: {HomeView},
  data() {
    return {
      greeting: "Hello World!",
    };
  },
};
</script>

<template>
  <HomeView :greeting="greeting"/>
</template>

// Presenter shouldn’t have 
// style tag
<style></style>
