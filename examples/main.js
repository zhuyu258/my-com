import Vue from "vue";
import App from "./App.vue";
import "../packages/fonts/iconfont.css";
import MyCom from "../packages";

Vue.config.productionTip = false;
Vue.use(MyCom);

new Vue({
  render: h => h(App)
}).$mount("#app");
