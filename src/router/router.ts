import { createWebHistory, createRouter } from "vue-router";

import MainLayout from "../components/layout/MainLayout.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "/home",
        name: "HomeView",
        component: HomeView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
