import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "/src/firebaseConfig.js";

firebase.initializeApp(firebaseConfig);

// Set persistence to NONE, i.e. user will be logged out upon refreshing page.
// We do this because knowing whether user is logged in or not upon refresh
// seems difficult with firebase auth (the getter is not a Promise, but you have  
// to wait an unknown time), and we do not have any persistent local storage(?).
// Also, page refresh in general is wonky due to this being a SPA (only on deployed version,
// refreshing works well when running locally), so not logging the user out on refresh
// would not add much to the application.

var auth = firebase.auth();
auth
  .setPersistence(firebase.auth.Auth.Persistence.NONE)
  .catch(function (error) {
    console.log(error);
  });

const app = createApp(App);

app.use(router);

app.mount("#app");
