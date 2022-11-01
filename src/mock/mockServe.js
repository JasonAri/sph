// 引入Mock
import Mock from 'mockjs';
// 引入JSON数据格式 
import banner from './banner.json';
import floor from './floor.json';

// 调用mock方法， Mock.mock(rurl,template)
Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/floor", { code: 200, data: floor });