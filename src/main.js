import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebaseConfig from "/src/firebaseConfig.js";
import firebase from "firebase";
import "./assets/main.css";

firebase.initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");
