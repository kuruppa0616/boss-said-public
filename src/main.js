import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "babel-polyfill";
import Element from "element-ui";
import VueHtml2Canvas from "vue-html2canvas";

import "element-ui/lib/theme-chalk/index.css";
Vue.use(VueHtml2Canvas);
Vue.use(Element);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
