<template>
  <div id="app">
    <!-- 具名插槽
    作用：创建一个更灵活，易于拓展的组件 -->
  <!-- <lay-out>
    <template v-slot:header>
      <h1>header</h1>
    </template>
       <template v-slot:content>
      <h1>content</h1>
    </template>
       <template v-slot:footer>
      <h1>footer</h1>
    </template>
  </lay-out> -->
  <!-- 前面是数据，后面是过滤方式 -->
  <h1>{{message | mySplit}}</h1>
  <h1>{{date | dataFormate}}</h1>
  <!-- 与下面的refs相对应 -->
  <div ref="box">hellow world</div>
  </div>
</template>

  <script>
        //import LayOut from"./components/LayOut.vue"
    export default {
        // components:{
        //   LayOut
        // }
       
        mounted(){
           //获取虚拟dom节点
          let box=this.$refs.box
          let style=window.getComputedStyle(box)
          console.log(style.height)
        },
        filters:{
          mySplit(value){
            //split分割成字符数组
            //join 把字符数组连接
            return value.split("").join();
          },
          dataFormate(value){
            let date=new Date(value);
            let year=date.getFullYear();
            //注意:这里月份加1
            let month=date.getMonth()+1;
            let d=date.getDate();
            return `${year}年${month}月${d}日`;
          }
        },

        data(){
          return {
            message:"hellow",
            date:"2011-1-1"
          }
        }
    }
</script>

<style>
  div{
    width: 100px;
    height: 100px;
    background-color: red;
  }
</style>
