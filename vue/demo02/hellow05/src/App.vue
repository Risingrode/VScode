<template>
  <div id="app">
    <h1>计算属性与监听属性</h1>
    <p>单价：{{price}}</p>
    <p>
      <button @click="sub">-</button>
      数量：{{quatity}}
      <button @click="add">+</button>
    </p>
    <p>折扣：{{discount}}</p>
    <p>总价：{{totalPrice}}</p>
  </div>
</template>

<script>

export default {
  data(){
    return {
    price:99,
    quatity:0,
    discount:0.5,
    totalPrice:0
    }
  },
//计算属性  可以对输入的值进行计算
//多个值改变，为了得到一个结果
//大部分情况会用到计算属性
  // computed:{
  //  totalPrice(){
  //     return  this.price*this.quatity*this.discount
  //   }
  // },

//侦听器
//一个值变化影响多个值，可以用侦听器
watch:{
  //val 就是quatity
  quatity(val){
    this.totalPrice=this.price*val*this.discount
  }
},

  methods:{
    sub(){
      if(this.quatity>0)
      this.quatity--
    },
    add(){
      this.quatity++
    }
  }
}
</script>

<style>

</style>
