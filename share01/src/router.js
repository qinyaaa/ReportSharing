import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "/main",
          name: "main",
          component: () =>
            import(/* webpackChunkName: "main" */ "./views/Main.vue"),
        },
        {
          path: "/dataV",
          name: "dataV",
          component: () =>
            import(/* webpackChunkName: "dataV" */ "./views/DataV.vue"),
        },
      ],
    },
  ],
});
