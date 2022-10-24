// 引入Vue和VueRouter
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用VueRouter插件
Vue.use(VueRouter);
// 引入路由组件
import Home from '@/pages/Home';
// 配置路由
export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
        },
        // 重定向（在项目跑起来的时候，访问/，立马定向到首页）
        {
            path: '*',
            redirect: '/home',
        }
    ]
});