// home模块的模块仓库
// 引入reqCategoryList
import { reqCategoryList, reqGetBannerList, reqGetFloorList } from '@/api'
const state = {
    // home三级菜单的数据
    categoryList: [],
    // 轮播图的数据
    bannerList: [],
    floorList: [],
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList;
    }
};
const actions = {
    // 通过API里面的接口函数，
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    },
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data);
        }
    },
    async getFloorList({ commit }) {
        let result = await reqGetFloorList();
        if (result.code == 200) {
            commit("GETFLOORLIST", result.data);
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