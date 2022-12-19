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

    getHomeButtonClass() {
      if (isLoggedIn()) {
        return "bannerbuttons";
      }
      else {
        return "bannerbuttonhidden"
      }
    },
    getLogoutButtonClass() {
      const path = this.$route.path;
      if (path === "/") {
        return "bannerbuttons";
      }
      else {
        return "bannerbuttonhidden"
      }
    },
  },
};
</script>

<template>
  <div class="appview">
    <p id="email" v-if="isLoggedIn()">{{ getUser().email }}</p>
    <div class="banner">
      <n-button
        v-bind:class="getHomeButtonClass()"
        class="bannerbuttons"
        @click="clickedHomeACB"
        type="primary"
        >Home</n-button
      >
      <n-button class="bannerbuttons" @click="clickedInfoACB" type="info"
        >Info</n-button
      >
      <n-button
        v-bind:class="getLogoutButtonClass()"
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

.bannerbuttonhidden {
  width: 75px;
  visibility: hidden;
}
</style>
