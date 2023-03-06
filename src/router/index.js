import { createRouter, createWebHistory } from "vue-router";
import Home from "@/view/home/Home.vue";
import Auth from "@/view/Auth.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
  },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
