<script>
import GlossaryModel from "./GlossaryModel.js";
import AppView from "./views/AppView.vue";
import resolvePromise from "./resolvePromise";
import firebase from "firebase";
import { firebaseModelPromise, updateFirebaseFromModel } from "./firebaseModel";

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
      console.log("initModel");
      resolvePromise(
        firebaseModelPromise(),
        this.modelPromiseState,
        this.setModel
      );
      updateFirebaseFromModel(this.model);
    },
    setModel() {
      if (this.modelPromiseState.data) {
        this.model = this.modelPromiseState.data;
      }
    },
  },
  data() {
    return {
      model: {},
    };
  },
  created() {
    this.modelPromiseState = {};
    this.model = new GlossaryModel();
    window.myModel = this.model;
  },
  components: { AppView },
};
</script>

<template>
  <AppView
    :model="model"
    :onGoToHome="goToHomeACB"
    :onLogOut="onLogOutACB"
    :onGoToInfo="onGoToInfo"
    :initModel="initModel"
  />
</template>
