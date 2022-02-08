import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import CoinDetails from "../views/CoinDetails.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: "/coin/:coinId",
    name: "CoinDetails",
    props: true,
    component: CoinDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
