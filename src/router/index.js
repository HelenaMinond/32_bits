import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "../views/Inicio.vue";
import Busquedas from "../views/Busquedas.vue";
import Ventas from "../views/Ventas.vue";
import Total from "../views/Total.vue";
import Vista404 from "../views/Vista404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Inicio,
  },
  {
    path: "/busquedas",
    name: "Busquedas",
    component: Busquedas,
  },
  {
    path: "/ventas",
    name: "Ventas",
    component: Ventas,
  },
  {
    path: "/total",
    name: "Total",
    component: Total,
  },
  {
    path: "*",
    name: "Vista404",
    component: Vista404,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
