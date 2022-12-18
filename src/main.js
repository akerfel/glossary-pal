import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import firebase from "firebase";
import firebaseConfig from "/src/firebaseConfig.js";

firebase.initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");
