import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import { PUBLIC_LAYOUT } from "@/constants/index.js";

const routes = [
  {
    path: "/",
    name: "home",
    // Nên thêm các dữ liệu bổ sung vào prop meta
    meta: {
      layout: PUBLIC_LAYOUT.default,
    },
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
