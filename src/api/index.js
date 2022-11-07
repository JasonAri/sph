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