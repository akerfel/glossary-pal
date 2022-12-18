import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "/src/firebaseConfig.js";

firebase.initializeApp(firebaseConfig);
// Get the FirebaseAuth instance
var auth = firebase.auth();

// Set the persistence to 'local'
auth
  .setPersistence(firebase.auth.Auth.Persistence.NONE)
  .then()
  .catch(function (error) {
    console.log(error);
  });

const app = createApp(App);

app.use(router);

app.mount("#app");
