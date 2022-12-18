import { createRouter, createWebHistory } from "vue-router";
import firebase from "firebase/app";
import "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        requiresAuth: true,
      },
      component: () => import("../presenters/HomePresenter.vue"),
    },
    {
      path: "/create",
      name: "create",
      meta: {
        requiresAuth: true,
      },
      component: () => import("../presenters/CreateDeckPresenter.vue"),
    },
    {
      path: "/review",
      name: "review",
      meta: {
        requiresAuth: true,
      },
      component: () => import("../presenters/ReviewDeckPresenter.vue"),
    },
    {
      path: "/postReviewView",
      name: "postReviewView",
      meta: {
        requiresAuth: true,
      },
      component: () => import("../presenters/PostReviewViewPresenter.vue"),
    },
    {
      path: "/login",
      name: "login",
      meta: {
        requiresAuth: false,
      },
      component: () => import("../presenters/LoginPresenter.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      meta: {
        requiresAuth: false,
      },
      component: () => import("../presenters/SignUpPresenter.vue"),
    },
    {
      path: "/info",
      name: "info",
      meta: {
        requiresAuth: false,
      },
      component: () => import("../presenters/InfoPresenter.vue"),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  var user = firebase.auth().currentUser;

  if (!user && to.meta.requiresAuth) {
    console.log("### REDIRECTED");
    next("login");
  } else {
    next();
  }
});

export default router;
