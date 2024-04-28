import { createWebHistory, createRouter } from "vue-router";
import Ejercicio1 from "@/views/Ejercicio1.vue";
import Ejercicio2 from "@/views/Ejercicio2.vue";
import Ejercicio3 from "@/views/Ejercicio3.vue";
import Ejercicio4 from "@/views/Ejercicio4.vue";

const routes = [
  {
    path: "/",
    name: "Ejercicio1",
    component: Ejercicio1,
  },
  {
    path: "/ejercicio2",
    name: "Ejercicio2",
    component: Ejercicio2,
  },
    {
    path: "/ejercicio3",
    name: "Ejercicio3",
    component: Ejercicio3,
  },
    {
    path: "/ejercicio4",
    name: "Ejercicio4",
    component: Ejercicio4,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;