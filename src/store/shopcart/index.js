import { reqCartList } from '@/api';
const state = {
    cartList: [
        { cartInfoList: [] }
    ],
}
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
    }
}
const actions = {
    // 获取
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit('GETCARTLIST', result.data);
        }
    }
}
const getters = {
    // 计算cartInfoList
    cartInfoList(state) {
        return state.cartList[0].cartInfoList
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}