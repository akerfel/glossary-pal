<script>
import LoginView from "../views/LoginView.vue";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  components: { LoginView },
  props: {
    model: Object,
    initModel: Function,
  },
  methods: {
    loginACB() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push("/");
          this.initModel();
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    setEmailACB(email) {
      this.email = email;
    },
    setPasswordACB(password) {
      this.password = password;
    },
    goToSignUpACB() {
      this.$router.push("/signup");
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<template>
  <LoginView
    :onLogin="loginACB"
    :onInputEmail="setEmailACB"
    :onInputPassword="setPasswordACB"
    :onSignUpACB="goToSignUpACB"
  />
</template>
