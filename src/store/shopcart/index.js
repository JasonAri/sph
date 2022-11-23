import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from '@/api';
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
    },
    // 删除
    async deleteCartBySkuId({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200) {
            return '此商品已被删除';
        } else {
            return Promise.reject('请求失败');
        }
    },
    // 修改购物车某一产品的选中状态
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedById(skuId, isChecked);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject('请求失败');
        }
    },
    // 删除选中的商品
    deleteAllCheckedCart({ dispatch, getters }) {
        let PromiseAll = []
        // 获取全部产品
        getters.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch('deleteCartBySkuId', item.skuId) : '此商品未选中';
            PromiseAll.push(promise)
        });
        return Promise.all(PromiseAll);
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