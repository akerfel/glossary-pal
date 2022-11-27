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
  props: {
    word: String
  }
};
</script>

<template>
  <HomeView :greeting="greeting"
            :word="word"/>
</template>