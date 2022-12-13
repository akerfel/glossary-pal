import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import ("../presenters/HomePresenter.vue"),
    },
    {
      path: "/create",
      name: "create",
      component: () => import ("../presenters/CreateDeckPresenter.vue"),
    },
    {
      path: "/review",
      name: "review",
      component: () => import ("../presenters/ReviewDeckPresenter.vue"),
    },
    {
      path: "/postReviewView",
      name: "postReviewView",
      component: () => import ("../presenters/PostReviewViewPresenter.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../presenters/LoginPresenter.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../presenters/SignUpPresenter.vue"),
    } 
  ],
});

export default router;
