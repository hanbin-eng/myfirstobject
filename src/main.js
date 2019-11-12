import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import router from "./router"
import { Button } from 'vant'
import { Tab, Tabs } from 'vant'
import ElementUI from 'element-ui'
Vue.use(ElementUI);

Vue.use(Tab).use(Tabs);

Vue.use(Button);

// 全局注册
// Vue.use(Dialog);


Vue.config.productionTip = false

Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

