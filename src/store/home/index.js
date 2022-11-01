// home模块的模块仓库
// 引入reqCategoryList
import { reqCategoryList, reqGetBannerList } from '@/api'
const state = {
    // home三级菜单的数据
    categoryList: [],
    // 轮播图的数据
    bannerList: [],
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
};
const actions = {
    // 通过API里面的接口函数，
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    },
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data)
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
};