import { createWebHistory, createRouter } from "vue-router";

import MainLayout from "../components/layout/MainLayout.vue";
import EmptyLayout from "../components/layout/EmptyLayout.vue";
import HomeView from "../views/HomeView.vue";
import EndPage from "../views/EndPage.vue";
import QuizPlay from "../views/QuizPlay.vue";
import WaitingRoom from "../views/WaitingRoom.vue";

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
      {
        path: "/quiz-play",
        name: "QuizPlay",
        component: QuizPlay,
      },
    ],
  },
  {
    path: "/",
    component: EmptyLayout,
    children: [
      {
        path: "/waiting-room",
        name: "WaitingRoom",
        component: WaitingRoom,
      },
      {
        path: "/end",
        name: "EndPage",
        component: EndPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
