import { createRouter, createWebHistory } from "vue-router";
import HomePresenter from "../presenters/HomePresenter.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => HomePresenter,
    },
  ],
});

export default router;
