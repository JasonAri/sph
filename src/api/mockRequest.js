// 对于axios进行二次封装 (引入axios和nprogess进度条，创建请求和响应拦截器)
import axios from "axios";
// 引入进度条
import nProgress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";
// 创建axios实例
const requests = axios.create({
    // 基础路径
    baseURL: '/mock',
    timeout: 5000,
});
// 请求拦截器
requests.interceptors.request.use((config) => {
    // 进度条开始
    nProgress.start();
    return config;
});
// 响应拦截器
requests.interceptors.response.use((res) => {
    // 进度条结束
    nProgress.done();
    // 返回数据
    return res.data;
}, (error) => {
    // 进度条结束
    nProgress.done();
    // 返回错误
    return Promise.reject(new error('faile'));
})
// 默认暴露
export default requests;