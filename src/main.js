import Vue from 'vue';
import App from './App.vue';
// 引入仓库
import store from '@/store';
// 引入路由
import router from '@/router';
// 按需引入element-UI
import { Carousel, CarouselItem, Icon, skeleton, skeletonItem, empty, MessageBox } from 'element-ui';
// 引入mockServe（使其执行一次mock）
import '@/mock/mockServe.js';
// 引入三级联动组件---全局组件
import TypeNav from '@/components/TypeNav';
// 引入分页器
import Pagination from '@/components/Pagination';
// 统一引入api
import *as API from '@/api';
// 引入lazyload
import VueLazyload from 'vue-lazyload';
// 引入图片
import lazyload from './assets/lazyload.gif';
// 引入自定义插件
import myPlugins from '@/plugins/myPlugins';

// 注册element-ui
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Icon);
Vue.use(skeleton);
Vue.use(skeletonItem);
Vue.use(empty);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
// 注册组件(两个参数：全局组件的名字，哪一个组件。)
Vue.component(TypeNav.name, TypeNav);
// 注册分页器
Vue.component(Pagination.name, Pagination);
// 注册lazyload插件
Vue.use(VueLazyload, {
  loading: lazyload
});
Vue.use(myPlugins,{name:'Jason plugins'});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  // 注册路由（组件身上会拥有$route,$router属性)
  router,
  // 注册仓库 ($store属性)
  store,
  beforeCreate() {
    Vue.prototype.$bus = this // 安装全局事件总线，$bus就是当前应用的vm
    Vue.prototype.$API = API // 安装API
  },
}).$mount('#app')
