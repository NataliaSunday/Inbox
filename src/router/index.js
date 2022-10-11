import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/inbox",
    name: "inbox",
    component: () => import("../views/InboxView.vue"),
  },
  {
    path: "/archive",
    name: "archive",
    component: () => import("../views/ArchiveView.vue"),
  },
  {
    path: "/logout",
    name: "logout",
    component: () => import("../views/LogoutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
