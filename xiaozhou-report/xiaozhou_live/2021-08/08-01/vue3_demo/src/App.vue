<template>
  <component 
    v-for="item in list"
    :is="item">

  </component>



<!-- <Sub @up="counter++" @down="counter--">
  <span>{{counter}}</span>
</Sub> -->

<!-- <Sub :msg="title"> -->
  <!-- <div class="header">
    <MyHeader>
  </div>
  <div class="container">
    <div class="nav">
      <MyNav>
    </div>
    <div class="content">
      <MyContent>
    </div>
  </div> -->
</template>

<script>
/* 
  什么是组件化开发和模块化开发。
  1. 组件化开发
  2. 模块化开发
*/
// import HelloWorld from './components/HelloWorld.vue'
// import MyHeader from './components/MyHeader.vue'
// import MyNav from './components/MyNav.vue'
// import MyContent from './components/MyContent.vue'
import Sub from './components/Sub.vue'
import MyTop from './components/MyTop.vue'
import MyBanner from './components/MyBanner.vue'
import MyContainer from './components/MyContainer.vue'
import MyFooter from './components/MyFooter.vue'

export default {
  name: 'App',
  data(){
    return {
      title:"hello component",
      counter:0,
      list:[
            "MyFooter",
            "MyTop",
            "MyContainer",
            "MyTop",
          ] 
    }
  },
  components: {
    MyTop,
    MyBanner,
    MyContainer,
    MyFooter
    // MyHeader,
    // MyNav,
    // MyContent
  }
}
</script>

<style scoped>
.header{
  height:80px;
  border:1px solid red;
}
.container{
  display:flex;
}
.container .nav{
  flex:1;
  height:800px;
  border:1px solid blue;
}
.container .content{
  flex:5;
  height:800px;
  border:1px solid green;
}
</style>
