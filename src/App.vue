<script>
import GlossaryModel from "./GlossaryModel.js";
import AppView from "./views/AppView.vue";
import firebase from 'firebase'
export default {
  name: "App",
  methods: {
    goToHomeACB() {
      this.$router.push("/")
    },
    onLogOutACB() {
      firebase.auth().signOut().then(() => {
       console.log("Sign-out successful!") 
        this.$router.push("/login");
      }).catch((error) => {
        console.log(error.code)
        alert(error.message);
      });
    },
    onGoToInfo() {
      this.$router.push("/info")
    },
  },
  data() {
    return {
      model: {},
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
  <AppView :model="model" :onGoToHome="goToHomeACB" :onLogOut="onLogOutACB" :onGoToInfo="onGoToInfo"/>
</template>

<style scoped>
.banner {
  align-self: flex-end;
}
</style>
