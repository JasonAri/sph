import Vue from 'vue';
import Vuex from 'vuex';
// 需要使用一次插件
Vue.use(Vuex);

// 引入模块仓库
import home from './home';
// 对外暴露Store类的一个实例
export default new Vuex.Store({
    modules: {
        home,
    }
})