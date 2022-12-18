<script setup>
import { NButton } from "naive-ui";
import { RouterView } from "vue-router";
import promiseNoData from "../views/promiseNoData.vue";
import firebase from "firebase";
</script>

<script>
export default {
  components: { promiseNoData },
  props: [
    "model",
    "modelPromiseState",
    "onGoToHome",
    "onLogOut",
    "onGoToInfo",
    "initModel",
  ],
  methods: {
    clickedLogoutACB() {
      console.log("Log out user");
      this.onLogOut();
    },
    clickedHomeACB() {
      "Going to home";
      this.onGoToHome();
    },
    clickedInfoACB() {
      "Going to info";
      this.onGoToInfo();
    },
    isLoggedIn() {
      if (firebase.auth().currentUser) return true;
      else return false;
    }
  },
};
</script>

<template>
  <div class="appview">
    <div class="banner">
      <n-button id="homebutton" @click="clickedHomeACB" type="primary"
        >Home</n-button
      >
      <n-button id="homebutton" @click="clickedInfoACB" type="info"
        >Info</n-button
      >
      <n-button
        id="signout"
        @click="clickedLogoutACB"
        type="primary"
        color="#3d3d3d"
        >Log out</n-button
      >
    </div>

    <promiseNoData v-if="isLoggedIn()" :promiseState="modelPromiseState" />
    <RouterView v-if="modelPromiseState.data"
      :model="model"
      :initModel="initModel"
    />
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
  grid-column-gap: 120px;
}
</style>
