// search的仓库
import { reqGetSearchInfo } from '@/api'

const state = {
    searchList: {},
}
const mutations = {
    GETSEACHLIST(state, searchList) {
        state.searchList = searchList;
    }
}
const actions = {
    async getSearchList({ commit }, params) {
        let result = await reqGetSearchInfo(params);
        if (result.code == 200) {
            commit('GETSEACHLIST', result.data)
            return 'ok'
        }else{
            return Promise.reject('failed')
        }
    }
}
// 计算属性（在项目中为了简化数据而生的）
const getters = {
    // 形参是当前的state
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    },
    total(state) {
        return state.searchList.total
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
}
