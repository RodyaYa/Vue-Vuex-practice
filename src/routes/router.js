import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "default",
    meta: { layout: "horizontal" },
    component: () => import("../pages/gallery/vGallery"),
    props: true,
  },
  {
    path: "/gallery",
    name: "gallery",
    meta: { layout: "horizontal" },
    component: () => import("../pages/gallery/vGallery"),
    props: true,
  },
  {
    path: "/users",
    name: "users",
    meta: { layout: "horizontal" },
    component: () => import("../pages/users/vUsers"),
    props: true,
  },
  {
    path: "/users/:id",
    name: "single-user",
    meta: { layout: "horizontal" },
    component: () => import("../pages/users/vUserSingle"),
    props: true,
  },
  {
    path: "/auth",
    name: "auth",
    meta: { layout: "empty" },
    component: () => import("../pages/auth/vAuth"),
    props: true,
  },
  {
    path: "/blog",
    name: "blog",
    meta: { layout: "horizontal" },
    component: () => import("../pages/blog/vBlog"),
    props: true,
  },
  {
    path: "/blog/:id",
    name: "article",
    meta: { layout: "horizontal" },
    component: () => import("../pages/blog/vArticle"),
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
