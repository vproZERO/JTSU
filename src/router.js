import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import SomeRouteComponent from "./views/SomeRouteComponent.vue";
import Topics from './views/Topics.vue'
const routes = [
  { path: "/direction", name: "direction", component: HomeView },
  { path: "/faculty", name: "faculty", component: HomeView },
  { path: "/course", name: "course", component: HomeView },
  { path: "/semester", name: "semester", component: HomeView },
  { path: "/language", name: "language", component: HomeView },
  { path: "/someRoute", name: "someRoute", component: SomeRouteComponent },
  {path: '/topics', name: 'topics', component: Topics},
  { path: "/:pathMatch(.*)*", redirect: { name: "direction" } },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
