<script>
import SignUpView from "../views/SignUpView.vue";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  components: { SignUpView },
  props: {
    model: Object,
    initModel: Function,
  },
  methods: {
    registerACB() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.initModel();
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    },
    setEmailACB(email) {
      this.email = email;
    },
    setPasswordACB(password) {
      this.password = password;
    },
    goToLoginACB() {
      this.$router.push("/login");
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
  <SignUpView
    :onSignUp="registerACB"
    :onGoToLogin="goToLoginACB"
    :onInputEmail="setEmailACB"
    :onInputPassword="setPasswordACB"
  />
</template>
