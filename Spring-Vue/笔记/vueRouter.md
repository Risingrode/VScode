# VueRouter

## 安装与使用

vue的单页面应用是基于路由和组件的，路由用于设定访问路径，并把路径和组件映射起来
新建一个router文件夹，再建一个index.js文件

```js
    import VueRouter from "vue-router";
    import Vue from "vue";
    //导入组件
    import Product from '../components/Product'

    Vue.use(VueRouter)

```

## 跳转链接

router-link to属性

```vue
 <router-link to="/discover">发现音乐</router-link>
    <router-link to="/my">我的音乐</router-link>
    <router-link to="/friends">关注</router-link>
   <!-- 声明路由占位标签 放到那里都行 是一个占位符-->
    <router-view></router-view>
```

## 链接注册

```js

```

## 动态路由

```js
//动态路由
//以属性的方式把id传过去,不过需要在vue组件中暴露这个属性
path: '/my',
component: My,
children: [
{ path: ":id", component: Product, props: true }
//提高代码复用性
```
