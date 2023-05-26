import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

/* 
    .vue文件：单文件组件
        1. 传参:
            父级向子级传，使用props
            子级向父级传，用自定义事件
        2. 插槽
        3. 动态组件
*/

createApp(App).mount('#app')
