import { reqAddOrUpdateShopCart, reqGoodsInfo } from '@/api';
const state = {
    goodInfo: {},
}
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    }
}
const actions = {
    // 获取产品信息的action
    async getGoodInfo({ commit }, skuid) {
        let result = await reqGoodsInfo(skuid);
        if (result.code == 200) {
            commit('GETGOODINFO', result.data);
        }
    },
    // 产品添加的action
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        // 当前的函数执行后会返回Promise
        if (result.code == 200) {
            return 'OK'
        } else {
            return Promise.reject()
        }
    }
}
const getters = {
    categoryView(state) {
        return state.goodInfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || []
    },
}
export default {
    state,
    actions,
    mutations,
    getters,
}