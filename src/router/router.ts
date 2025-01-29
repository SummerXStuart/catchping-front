import { createWebHistory, createRouter } from "vue-router";

import MainLayout from "../components/layout/MainLayout.vue";
import EmptyLayout from "../components/layout/EmptyLayout.vue";
import HomeView from "../views/HomeView.vue";
import EndPage from "../views/EndPage.vue";
import QuizPlay from "../views/QuizPlay.vue";
import RulePage from "../views/RulePage.vue";
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
        path: "/catchping/quiz-play",
        name: "QuizPlay",
        component: QuizPlay,
      },
      {
        path: "/catchping/end",
        name: "EndPage",
        component: EndPage,
      },
      {
        path: "/catchping/rules",
        name: "RulePage",
        component: RulePage,
      },
    ],
  },
  {
    path: "/",
    component: EmptyLayout,
    children: [
      {
        path: "/catchping",
        name: "WaitingRoom",
        component: WaitingRoom,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
