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
    // 获取的购物车列表
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200 && result.data[0]) {
            commit('GETCARTLIST', result.data);
        } else {
            commit('GETCARTLIST', [{ cartInfoList: [] }]);
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
            return '修改选中状态成功';
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
    },
    // 修改全选/全不选
    updateAllCartIsChecked({ dispatch, getters }, isChecked) {
        console.log(isChecked);
        // 初始化一个数组
        let PromiseAll = []
        // 遍历
        getters.cartInfoList.forEach(item => {
            // 不同状态的才发请求
            let promise = item.isChecked == isChecked ? 'checked一致' : dispatch('updateCheckedById', { skuId: item.skuId, isChecked });
            PromiseAll.push(promise);
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