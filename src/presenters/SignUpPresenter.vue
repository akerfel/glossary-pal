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
    registerACB(email, password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
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
  <SignUpView :onSignUp="registerACB" />
</template>
