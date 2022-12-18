<script>
import GlossaryModel from "./GlossaryModel.js";
import AppView from "./views/AppView.vue";
import resolvePromise from "./resolvePromise";
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  firebaseModelPromise,
  updateFirebaseFromModel,
} from "./firebaseModel";

export default {
  name: "App",
  methods: {
    goToHomeACB() {
      this.$router.push("/");
    },
    onLogOutACB() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Sign-out successful!");
          this.model = new GlossaryModel();
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    },
    onGoToInfo() {
      if (this.$route.name === "info") {
        this.$router.push("/");
      } else this.$router.push("/info");
    },
    initModel() {
      console.log("initmodel");
      try {
        resolvePromise(
          firebaseModelPromise(),
          this.modelPromiseState,
          this.setModel
        );
      } catch {
        console.log("error resolving")
      }
    },
    setModel() {
      if (this.modelPromiseState.data) {
        this.model = this.modelPromiseState.data;
        updateFirebaseFromModel(this.model);
      }
    },
  },
  data() {
    return {
      model: {},
      modelPromiseState: {},
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
  <!DOCTYPE html>
  <AppView
    :model="model"
    :onGoToHome="goToHomeACB"
    :onLogOut="onLogOutACB"
    :onGoToInfo="onGoToInfo"
    :initModel="initModel"
    :modelPromiseState="modelPromiseState"
  />
</template>
