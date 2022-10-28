import Vue from 'vue';
import App from './App.vue';
// 引入仓库
import store from '@/store';
// 引入路由
import router from '@/router';
// 引入三级联动组件---全局组件
import TypeNav from '@/components/TypeNav';
// 注册组件(两个参数：全局组件的名字，哪一个组件。)
Vue.component(TypeNav.name, TypeNav);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  // 注册路由（组件身上会拥有$route,$router属性)
  router,
  // 注册仓库 ($store属性)
  store,
}).$mount('#app')
