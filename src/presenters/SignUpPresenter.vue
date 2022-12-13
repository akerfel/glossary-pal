<script>
import SignUpView from "../views/SignUpView.vue";
import firebase from 'firebase'
export default {
  components: { SignUpView },
  data() {
    return {
      
    };
  },
  props: {
    model: Object,
  },
  methods: {
    registerACB(email, password) {
      firebase
      .auth()
      .createUserWithEmailAndPassword(email, password) 
      .then((data) => {
        console.log('Successfully registered!');
        this.$router.push("/")
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
    }
  }
};
</script>

<template>
  <SignUpView
   :onSignUp="registerACB"
   />
</template>