<script setup>
import { NButton } from "naive-ui";
import { RouterView } from "vue-router";
</script>

<script>
export default {
  props: ["model", "onGoToHome"],
  methods: {
    clickedLogoutACB() {
      console.log("Log out user");
    },
    clickedHomeACB() {
      this.onGoToHome();
    },
  },
};
</script>

<template>
  <div class="appview">
    <div class="banner">
      <n-button id="homebutton" @click="clickedHomeACB()" type="primary"
        >Home</n-button
      >
      <n-button
        id="signout"
        @click="clickedLogoutACB()"
        type="primary"
        color="#3d3d3d"
        >Log out</n-button
      >
    </div>
    <RouterView :model="model" />
  </div>
</template>

<style scoped>
.appview {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 440px;
}
.banner {
  margin-bottom: 50px;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 250px;
}
</style>
