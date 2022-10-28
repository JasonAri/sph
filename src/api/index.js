// 此模块用于统一管理API
import requests from './request';

// 三级联动接口（get: /api/product/getBaceCategoryList ）
export const reqCategoryList = () => {
    return requests({ url: '/product/getBaseCategoryList', method: 'get' });
}