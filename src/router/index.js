import { createRouter, createWebHistory } from "vue-router";

import { PUBLIC_LAYOUT } from "@/constants/index.js";

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Home",
    },
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/weather/:country/:location",
    name: "locationView",
    meta: {
      title: "Location",
      layout: PUBLIC_LAYOUT.default,
    },
    component: () => import("../views/LocationView.vue"),
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // Nên thêm các dữ liệu bổ sung vào prop meta
  //   meta: {
  //     layout: PUBLIC_LAYOUT.default,
  //   },
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${
    to.params.location
      ? `${to.params.location}, ${to.params.country}`
      : to.meta.title
  } | GoWEATHER`;
  next();
});

export default router;
