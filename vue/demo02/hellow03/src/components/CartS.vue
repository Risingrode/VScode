<template>
    <div>
      <h1>购物车</h1>
      <ul>
          <li v-for="(v,i) of fruits" :key="i">
                {{v.name}}
                单价：{{v.price}}
                <counter
                :pr="v.price"
                :qu="v.qu"
                :index="i"
                @add="add"
                @sub="sub"
                ></counter>
          </li>
      </ul>
      <h2>总价是：{{sum}}</h2>
    </div>
</template>

<script>
 import Counter from "./CounteR.vue"

export default{
    components:{
        Counter
    },
   data(){
       return {
           fruits:[
               {name:"苹果",price:3.14,qu:0},
               {name:"香蕉",price:2.14,qu:0},
               {name:"鸭梨",price:6.14,qu:0}
           ],
           sum:0
       }
   },
   methods:{
       add(index){
            this.fruits[index].qu++
       },
       sub(index){
            if(this.fruits[index].qu>0)
            this.fruits[index].qu--
		else
		alert("不能再减少了！")
       }
   },
   watch:{
        total(){
            this.sum=this.fruits[0].qu*this.fruits[0].price
        }       
   }
}
</script>
