<script>
import LoginView from "../views/LoginView.vue";
import firebase from "firebase";

export default {
  components: { LoginView },
  props: {
    model: Object,
    initModel: Function,
  },
  methods: {
    loginACB(email, password) {
      console.log(email + password);
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((data) => {
          console.log("Successfully logged in!");
          this.initModel();
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    },
  },
};
</script>

<template>
  <LoginView :onLogin="loginACB" />
</template>
