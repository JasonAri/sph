import { reqAddressInfo, reqOrderInfo } from '@/api';
const state = {
    addressInfo: [],
    orderInfo: {},
}
const mutations = {
    GETUSERADDRESS(state, addressInfo) {
        state.addressInfo = addressInfo;
    },
    GETORDERINFO(state, orderInfo) {
        state.orderInfo = orderInfo;
    }
}
const actions = {
    // 获取用户地址信息
    async getUserAddress({ commit }) {
        let result = await reqAddressInfo();
        if (result.code == 200) {
            commit('GETUSERADDRESS', result.data);
            return 'ok'
        } else {
            return Promise.reject(result.message);
        }
    },
    async getOrderInfo({ commit }) {
        let result = await reqOrderInfo();
        if (result.code == 200) {
            commit('GETORDERINFO', result.data);
            return 'ok'
        } else {
            return Promise.reject(result.message);
        }
    }
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters,
}