<template>
  <div>
    <!-- 可以控制元素可见性
    v-if  不渲染dom -->
    <h1 v-if="true">hellow,world</h1>
    <!-- v-show 渲染dom，把元素设置为display:none -->
    <h1 v-show="true">hellow,world</h1>
    <p v-if="isLogin">欢迎:小明</p>

    <p v-if="!isLogin"><a href="">请登录</a></p>
    <ul>
      <li v-for="(fruit,index) of fruits" :key ="index">
        <p>名称：{{fruit}}</p>
        <p>索引：{{index}}</p>
      </li>
    </ul>
    <table>
      <thead>
        <th>序号</th>
        <th>姓名</th>
        <th>年龄</th>
      </thead>
      <tbody>
        <tr v-for="(v,i) of students" :key="i">
          <td>{{i+1}}</td>
          <td>{{v.name}}</td>
          <td>{{ v.age}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default{
  //注册外部组件

  data(){
    return {
      isLogin:true,
      fruits:["香蕉","苹果","鸭梨"],
      students:[
        {name:"小明",age:2},
        {name:"小亮",age:3},
        {name:"小红",age:4},
      ]
    }
  } 
}
</script>

<style>



</style>
