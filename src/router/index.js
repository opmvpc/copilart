import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Words from "../views/Words.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/words",
    name: "Words",
    component: Words,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
