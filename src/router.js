import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Colla from "./views/Colla.vue";
import Editor from "./views/Editor.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/colla",
      name: "colla",
      component: Colla
    },
    {
      path: "/editor",
      name: "editor",
      component: Editor
    }
  ]
});
