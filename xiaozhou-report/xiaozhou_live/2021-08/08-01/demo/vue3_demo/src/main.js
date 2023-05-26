// 单文件组件
/* 
    vscode
    1. 官网下载node，下一步下一步安装
    2. node npm
    3. 选择哪一个node的版本呢
    4. node会用一些简单的命令就可以了
    5. npm:node的包管理器
    6. npm的所有依赖管理都是通过package.json文件处理的

    vue3  vite

*/
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app');
