// 引入Vue和VueRouter
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用VueRouter插件
Vue.use(VueRouter);
// 引入仓库
import store from '@/store';
// 引入一级路由组件
import Home from '@/views/Home';
import Login from '@/views/Login';
import Search from '@/views/Search';
import Register from '@/views/Register';
import Detail from '@/views/Detail';
import AddCartSuccess from '@/views/AddCartSuccess';
import ShopCart from '@/views/ShopCart';
import Trade from '@/views/Trade';
import Pay from '@/views/Pay';
import PaySuccess from '@/views/PaySuccess';
import Center from '@/views/Center';
// 引入二级路由组件
import MyOrder from '@/views/Center/myOrder';
import GroupOrder from '@/views/Center/groupOrder';
// 配置路由
let router = new VueRouter({
    routes: [
        // 重定向（在项目跑起来的时候，访问/，立马定向到首页）
        {
            path: '*',
            redirect: '/home',
        },
        {
            path: '/home',
            component: Home,
            // 路由元信息
            meta: { show: true, gray: true }
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
            name: 'addcartsuccess',
            component: AddCartSuccess,
            meta: { show: true }
        },
        {
            path: '/shopcart',
            component: ShopCart,
            meta: { show: true }
        },
        {
            path: '/trade',
            component: Trade,
            meta: { show: true },
            beforeEnter: (to, from, next) => {
                console.log(from.path, to.path)
                if (from.path == '/shopcart' || from.path == '/') {
                    next();
                } else {
                    next(false);
                }
            },
        },
        {
            path: '/pay',
            component: Pay,
            meta: { show: true },
            beforeEnter: (to, from, next) => {
                if (from.path == '/trade' || from.path == '/') {
                    next();
                } else {
                    next(false);
                }
            }
        },
        {
            path: '/paysuccess',
            component: PaySuccess,
            meta: { show: true }
        },
        {
            path: '/center',
            component: Center,
            meta: { show: true },
            // 二级路由组件
            children: [
                {
                    path: 'myorder',
                    component: MyOrder,
                },
                {
                    path: 'grouporder',
                    component: GroupOrder,
                },
                // 重定向
                {
                    path: '/center',
                    redirect: '/center/myorder',
                },
            ]
        }
    ],
    // 滚动行为
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
    // 判断token
    if (localStorage.getItem('TOKEN')) {
        // 判断userInfo
        if (store.state.user.userInfo.name) {
            // 判断跳转login
            if (to.path == '/login') {
                // 拒绝跳转
                next(false);
            } else { next() }
        } else {
            // 有token无userInfo
            // 发请求拿userInfo
            store.dispatch('getUserInfo').then(() => {
                // 拿到userInfo，并放行
                next();
            }).catch(() => {
                // token失效，删除token
                localStorage.removeItem('TOKEN');
                // 重新跳转到主页
                next('/home');
            });
        }
    } else {
        // 没有token（未登录）不能去 pay/paysuccess/center
        let toPath = to.path;
        if (toPath.indexOf('/pay') != -1 || toPath.indexOf('/paysuccess') != -1 || toPath.indexOf('/center') != -1) {
            // 把未登录的路径保存为query参数存起来
            next('/login?redirect=' + toPath);
        } else {
            next();
        }
    }
});

export default router;