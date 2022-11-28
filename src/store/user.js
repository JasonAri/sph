import { reqGetCode, reqUserLogin, reqUserRegister, reqUserInfo, reqLogout } from '@/api'
const state = {
    code: '',
    userId: '',
    userInfo: {},
}
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(state, data) {
        state.userId = data.userId;
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    USERLOGOUT(state) {
        state.userInfo = {};
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
    },
    // 登录
    async userLogin({ commit }, user) {
        let result = await reqUserLogin(user);
        if (result.code == 200) {
            commit('USERLOGIN', result.data);
            return result.data.token;
        } else {
            return Promise.reject(`登录失败,${result.message}`);
        }
    },
    // 获取用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo();
        if (result.code == 200) {
            commit('GETUSERINFO', result.data)
            return 'ok'
        } else {
            return Promise.reject(result.message);
        }
    },
    // 登出
    async userLogout({ commit }) {
        let result = await reqLogout();
        if (result.code == 200) {
            commit('USERLOGOUT');
            return 'ok';
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