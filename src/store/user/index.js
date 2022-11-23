import { reqGetCode, reqUserRegister } from '@/api'
const state = {
    code: ''
}
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    }
}
const actions = {
    // 获取验证码
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        if (result.code == 200) {
            commit("GETCODE", result.data);
            return '请求验证码成功'
        } else {
            return Promise.reject('请求验证码失败')
        }
    },
    // 用户注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        console.log(result)
        if (result.code == 200) {
            return '注册成功';
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