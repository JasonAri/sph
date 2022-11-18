// 引入Vue和VueRouter
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用VueRouter插件
Vue.use(VueRouter);
// 引入路由组件
import Home from '@/views/Home';
import Login from '@/views/Login';
import Search from '@/views/Search';
import Register from '@/views/Register';
import Detail from '@/views/Detail';
import AddCartSuccess from '@/views/AddCartSuccess';
// 配置路由
export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            // 路由元信息
            meta: { show: true }
        },
        {
            path: '/login',
            component: Login,
            meta: { show: false }
        },
        {
            path: '/search/:keyword?',
            component: Search,
            meta: { show: true },
            name: 'search',
            // props: true, // 只能传params
            // props: { a: 1, b: 2 }, // 可以传params和其他的一些参数
            props: ($route) => ({ keyword: $route.params.keyword, k: $route.query.k, a: 1, b: 2, }),
        },
        {
            path: '/register',
            component: Register,
            meta: { show: false }
        },
        {
            path: '/detail/:skuid',
            component: Detail,
            meta: { show: true }
        },
        {
            path: '/addcartsuccess',
            name:'addcartsuccess',
            component: AddCartSuccess,
            meta: { show: true }
        },
        // 重定向（在项目跑起来的时候，访问/，立马定向到首页）
        {
            path: '*',
            redirect: '/home',
        }
    ],
    // 滚动行为
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
});