// Vue插件一定是暴露一个对象
let myPlugins = {};

myPlugins.install = function (Vue,options) {
    // Vue.prototype.$bus 都能拿到
    // Vue.directive
    // Vue.component
    // Vue.filter
    Vue.directive(options.name,(element,params)=>{
        element.innerHTML=params.value.toUpperCase();
    })
}

export default myPlugins;