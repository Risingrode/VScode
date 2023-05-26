<template>
<!-- 网页模板 编写html文件 只能写一个标签 可以把多个标签放入一个div里 -->
  <div id="app">
  <h1 :title="message">{{message}}</h1>
   <h1>hellow,world</h1>
   <button @click="showHi">点击按钮</button>
  </div>
</template>

<script>
//js代码

//暴露一个接口
export default {
  data(){
    return {
      message:"hellow,vue"
    }
  },
  methods:{
    showHi(){
      alert("hi")
    }
  }
}
</script>

<style>
/* css代码 */

</style>
