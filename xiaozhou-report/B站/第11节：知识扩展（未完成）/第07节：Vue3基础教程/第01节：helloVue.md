1. Vue3使用Vue.createApp创建一个Vue的应用，而不是将Vue作为一个构造函数；
2. 即使cdn，data仍然是一个方法，如果使用cdn，vue2是一个对象
3. 和vue2一样，可以使用mount挂载应用，但是不能使用el。

``` html
    <div id="app">
        {{message}}
    </div>
    <script>
        Vue.createApp({
            data() {
                return {
                    message: "hello vue"
                }
            }
        }).mount("#app")
    </script>
```

### 概念

1. 插值{{}}
2. 特性绑定（属性绑定：v-bind）
3. v-html，解析成html
4. 绑定事件
5. computed
6. watch
7. 条件渲染
8. 列表渲染
9. 表单

### 声明周期

1. 初始化阶段
2. 更新阶段
3. 销毁阶段

### 组件化开发

子组件可以使用根组件数据？

1. 自定义事件?
2. 组件中的v-model?

### 数据响应式

1. vue2使用Object.defineProperty()
2. vue3使用Proxy

是观察者模式与代理模式的区别吗？有待研究

### 源码

如果clone源码；

如何阅读源码；

如何实现简易的vue，只做数据双向绑定

### 如何实现Vue中的各个功能

1. 计算属性和侦听器
2. nextTick
3. key的原理
4. 组件通信
5. 编写插件

### 虚拟DOM与diff算法

1. DOM如何变成虚拟DOM，属于模板编译的知识范畴。
2. 虚拟DOM如何渲染，手写h函数
3. diff算法原理：两个虚拟DOM如何进行差异比较
4. 虚拟DOM如何变成真正的DOM，这个是涵盖在diff算法里的

#### 概念

1. h算法可以创建一个虚拟节点
2. patch算法可以让虚拟节点上树
