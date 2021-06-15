import Vue from "vue";
import App from "./App.vue";
import router from "./routes/router";
import store from "./store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
