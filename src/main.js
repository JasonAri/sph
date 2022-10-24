import Vue from 'vue';
import App from './App.vue';
// 引入路由
import router from '@/router';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  // 注册路由（组件身上会拥有$route,$router属性
  router,
}).$mount('#app')
