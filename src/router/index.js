import { createRouter, createWebHistory } from "vue-router";
import HomePresenter from "../presenters/HomePresenter.vue";
import CreateDeckPresenter from "../presenters/CreateDeckPresenter.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => HomePresenter,
    },
    {
      path: "/create",
      name: "create",
      component: () => CreateDeckPresenter,
    },
  ],
});

export default router;
