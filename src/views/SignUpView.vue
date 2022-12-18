<script setup>
import { NButton, NInput } from "naive-ui";
</script>

<script>
export default {
  props: {
    onSignUp: Function,
    onGoToLogin: Function,
    onInputEmail: Function,
    onInputPassword: Function,
  },
  methods: {
    onSignUpACB() {
      this.onSignUp();
    },
    emailProvidedACB(email) {
      this.onInputEmail(email);
    },
    passwordProvidedACB(password) {
      this.onInputPassword(password);
    },
    clickedEnterOnInputFieldACB() {
      this.onSignUpACB();
    },
    clickedGoToLoginACB() {
      this.onGoToLogin();
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

  <div class="signup">
    <p class="title">{{ "Sign up here!" }}</p>
    <br /><br />
    <n-input
      @input="emailProvidedACB"
      @keyup.enter="clickedEnterOnInputFieldACB"
      type="text"
      placeholder="E-mail"
    /><br /><br />
    <n-input
      @input="passwordProvidedACB"
      @keyup.enter="clickedEnterOnInputFieldACB"
      type="password"
      placeholder="Password"
    /><br /><br />
    <n-button type="submit" color="black" v-on:click="onSignUpACB"
      >Sign up</n-button
    ><br /><br />
    <n-button type="submit" color="#727571" v-on:click="clickedGoToLoginACB"
      >Go back to login</n-button
    >
  </div>
</template>

<style scoped>
a:link {
  color: blue;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: purple;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}

.logo {
  margin-bottom: 75px;
}

.createDeck {
  margin-bottom: 50px;
}

.title {
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 24px;
}

.deck {
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

.signup {
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

.deckName {
  text-align: left;
  float: left;
  width: 100px;
}

.deckLanguages {
  font-size: 12px;
  color: rgb(34, 34, 34);
  margin: 15px;
  float: center;
  width: 100px;
}
</style>
