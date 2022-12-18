<script setup>
import { NButton, NInput } from "naive-ui";
</script>

<script>
export default {
  props: {
    onLogin: Function,
    onSignUpClick: Function,
    onInputEmail: Function,
    onInputPassword: Function,
    onSignUpACB: Function,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onLoginACB() {
      console.log("user tried to log in!");
      this.onLogin(this.email, this.password);
    },
    emailProvidedACB(email) {
      this.onInputEmail(email);
    },
    passwordProvidedACB(password) {
      this.onInputPassword(password);
    },
    clickedSignUpACB() {
      this.onSignUpACB();
    },
  },
};
</script>

<template>
  <div>
    <img
      alt="Glossary Pal logo"
      class="logo"
      src="@/assets/logo.png"
      width="400"
      height="125"
    />
  </div>

  <div class="login">
    <p class="title">{{ "Please log in to use Glossary Pal." }}</p>
    <br /><br />
    <n-input
      @input="emailProvidedACB"
      type="text"
      placeholder="E-mail"
    /><br /><br />
    <n-input
      @input="passwordProvidedACB"
      type="password"
      placeholder="Password"
    /><br /><br />
    <n-button
      type="submit"
      color="black"
      class="buttons"
      v-on:click="onLoginACB"
      >Login</n-button
    ><br /><br />
    <n-button color="#727571" class="buttons" @click="clickedSignUpACB"
      >Sign up</n-button
    >
  </div>
</template>

<style scoped>
.logo {
  margin-bottom: 75px;
}

.buttons {
  width: 76px;
}
.title {
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 24px;
}
.login {
  margin: 5px auto;
  color: rgb(0, 255, 13);
  font-weight: bold;
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  width: 435px;
  border-radius: 8px;
  border: 2px solid rgb(206, 50, 50);
}
</style>
