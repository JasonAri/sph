import Vue from "vue";

// Vue插件一定是暴露一个对象
let myPlugins = {};

myPlugins.install = function (vue,b) {
    // Vue.prototype.$bus 都能拿到
    // Vue.directive
    // Vue.component
    // Vue.filter
    Vue.directive(options.name,()=>{})
}

export default myPlugins;