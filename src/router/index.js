import Vue from "vue";
import VueRouter from "vue-router";
import shareInfo from "./weixinShare";
Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "homePage",
    component: () => import("../views/HomePage.vue"),
    meta: {
      title: 'vue-h5模板',
    }
  },
  // {
  //   path: "/",
  //   name: "index",
  //   component: () => import("../views/Index.vue")
  // },
 
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {


  /* 路由发生变化修改页面title */
  if (to.meta.title) {

    document.title = to.meta.title
  }
  next()
})
router.afterEach((to, from) => {
  const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV)
  
  if (IS_PROD) {
      shareInfo.init({
          title: document.title,
          desc: "测试测试",
          img: "",
          shareURL:location.href,
      });
  }
});
export default router;