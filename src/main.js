import Vue from "vue";
import App from "./App.vue";
//import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import request from '@/util/request'
Vue.prototype.$http = request;
// import "@/assets/js/flexible.js";
require("./assets/js/nbd_count.js"); //百度统计
import * as filters from './filters'
 import "@/assets/css/reset.css";


//vant
import {
  List,
  Button,
  Toast,
  Popup ,
  Dialog ,
  Loading 
} from 'vant';

import 'vant/lib/index.css';

Vue.config.productionTip = false;
Vue.use(List);
Vue.use(Button);
Vue.use(Toast);
Vue.use(Popup);
Vue.use(Dialog);
Vue.use(Loading);


Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");