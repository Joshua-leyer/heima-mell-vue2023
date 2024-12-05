import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import '@/style/common.less'
import store from './store'; // 引入 Vuex Store
import '@/utils/tools.js';

Vue.use(Vant)
Vue.config.productionTip = false
Vue.config.devtools = true;

new Vue({
  router,
  store, // 注册 Store
  render: h => h(App)
}).$mount('#app')
