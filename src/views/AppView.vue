<script setup>
import { NButton } from "naive-ui";
import { RouterView } from "vue-router";
import promiseNoData from "../views/promiseNoData.vue";
import { isLoggedIn, getUser } from "../firebaseModel";
</script>

<script>
export default {
  components: { promiseNoData },
  props: [
    "model",
    "initModel",
    "modelPromiseState",
    "onGoToHome",
    "onLogOut",
    "onGoToInfo",
  ],
  methods: {
    clickedLogoutACB() {
      this.onLogOut();
    },
    clickedHomeACB() {
      this.onGoToHome();
    },
    clickedInfoACB() {
      this.onGoToInfo();
    },
    showHomeAndSignOutBtn() {
      const path = this.$route.path;
      if (path === "/login" || path === "/signup") {
        return false;
      } else if (path === "/info") {
        return isLoggedIn();
      } else return true;
    },
  },
};
</script>

<template>
  <div class="appview">
    <p id="email" v-if="isLoggedIn()">{{getUser().email}}</p>
    <div class="banner">
        <n-button
        v-if="showHomeAndSignOutBtn()"
        class="bannerbuttons"
        @click="clickedHomeACB"
        type="primary"
        >Home</n-button
      >
      <n-button class="bannerbuttons" @click="clickedInfoACB" type="info"
        >Info</n-button
      >
      <n-button
        v-if="showHomeAndSignOutBtn()"
        class="bannerbuttons"
        @click="clickedLogoutACB"
        type="primary"
        color="#3d3d3d"
        >Log out</n-button
      >

    </div>
    <RouterView :model="model" :initModel="initModel" />
    <promiseNoData :promiseState="modelPromiseState" />
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
  margin-bottom: 30px;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 70px;
}

#email {
  margin-bottom: 8px;
}

.bannerbuttons {
  width: 75px;
}
</style>
