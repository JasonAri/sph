// 此模块用于统一管理API
import requests from './request';
import mockRequests from './mockRequest';

// 三级联动接口（get: /api/product/getBaceCategoryList ）
export const reqCategoryList = () => {
    return requests({ url: '/product/getBaseCategoryList', method: 'get' });
}
// 获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => {
    return mockRequests({ url: '/banner', method: 'get' });
}
// 获取floor数据
export const reqGetFloorList = () => mockRequests.get('/floor');
// 获取搜索模块数据
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params });
// 获取产品详情
export const reqGoodsInfo = (skuid) => requests.get(`/item/${skuid}`);
// 将产品添加到购物车中or更新某一个产品的个数
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post', });
// 获取购物车列表数据
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' });
// 删除购物车产品的接口
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' });
// 修改商品选中状态
export const reqUpdateCheckedById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' });
// 获取验证码
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' });
// 注册
export const reqUserRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' });
// 登录
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' });
// 获取用户信息
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', mehtod: 'get' });
// 登出
export const reqLogout = () => requests({ url: '/user/passport/logout', method: 'get' });
// 获取用户地址信息
export const reqAddressInfo = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' });
// 获取商品清淡
export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' });
// 提交订单
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, method: 'post', data, });
// 获取支付信息
export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' });
// 获取支付订单状态
export const reqPayStatus = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' });
// 获取我的订单列表
export const reqMyOrderList = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' });