import Vue from 'vue';
import App from './App.vue';
// 引入仓库
import store from '@/store';
// 引入路由
import router from '@/router';
// 按需引入element-UI
import { Carousel, CarouselItem } from 'element-ui';
// 引入mockServe（使其执行一次mock）
import '@/mock/mockServe.js';
// 引入三级联动组件---全局组件
import TypeNav from '@/components/TypeNav';

// 注册ui
Vue.use(Carousel);
Vue.use(CarouselItem);
// 注册组件(两个参数：全局组件的名字，哪一个组件。)
Vue.component(TypeNav.name, TypeNav);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  // 注册路由（组件身上会拥有$route,$router属性)
  router,
  // 注册仓库 ($store属性)
  store,
  beforeCreate(){
    Vue.prototype.$bus=this // 安装全局事件总线，$bus就是当前应用的vm
  },
}).$mount('#app')
