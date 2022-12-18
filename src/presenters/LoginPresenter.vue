<script>
import LoginView from "../views/LoginView.vue";
import firebase from "firebase";
import { firebaseModelPromise, updateFirebaseFromModel } from "../firebaseModel";

export default {
  components: { LoginView },
  data() {
    return {};
  },
  props: {
    model: Object,
  },
  methods: {
    loginACB(email, password) {
      console.log(email + password);
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((data) => {
          console.log("Successfully logged in!");
          this.$router.push("/");
          firebaseModelPromise();
          updateFirebaseFromModel(this.model);
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
