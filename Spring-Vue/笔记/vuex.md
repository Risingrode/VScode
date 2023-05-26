# vuex

## 介绍

## 状态管理

每一个vuex都有一个核心，store文件夹，store变化后，相应的东西也会发生变化

## 实例化

```js
// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
```
