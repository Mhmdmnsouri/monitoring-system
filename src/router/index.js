import { createRouter, createWebHistory } from "vue-router";
import Humidity from "../views/Humidity.vue";
import Temperature from "../views/Temperature.vue";
import Voltage from "../views/Voltage.vue";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/sensor/humidity/8h",
      name: "humidity",
      component: Humidity,
    },
    {
      path: "/sensor/temperature/8h",
      name: "temperature",
      component: Temperature,
    },
    {
      path: "/sensor/voltage/8h",
      name: "voltage",
      component: Voltage,
    },
  ],
});

export default router;
