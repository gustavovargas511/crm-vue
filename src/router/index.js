import { createRouter, createWebHistory } from "vue-router";
import UsersView from "@/views/UsersView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: UsersView,
      props: { title: "Users List" },
    },
    {
      path: "/new-user",
      name: "new-user",
      component: () => import("../views/NewUserView.vue"),
      props: { title: "Add New User" },
    },
  ],
});

export default router;
