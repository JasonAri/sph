// home模块的模块仓库
// 引入reqCategoryList
import { reqCategoryList } from '@/api'
const state = {
    categoryList: [],
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    }
};
const actions = {
    // 通过API里面的接口函数，
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
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