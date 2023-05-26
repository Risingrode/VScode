import Vue from 'vue'
import App from './App.vue'
//import 引入第三方模块，可以取代require
//export 暴露接口，让其他模块使用当前模块
Vue.config.productionTip = false //配置开发选项，会有一些友好的错误提示

new Vue({
    render: h => h(App),
    // render (createElement){
    //   return createElement(App);
    // }
}).$mount('#app')