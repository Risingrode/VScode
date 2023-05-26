<template>
   <span>
       <button @click="sub">-</button>
       <span>{{qu}}</span>
       <button @click="add">+</button>
        <li>价格是：{{sum}}</li>
   </span>
</template>

<script>

export default{
    props:["qu","index","pr"],
    data(){
        return {
           sum:0
        }
    },    
    // computed:{//不需要在data中定义sum值
    //     sum(){
    //         return this.qu*this.pr
    //     }
    // },
    watch:{
        //用val替换qu
        //函数名字必须是监听变量
        qu(val){
            this.sum=val*this.pr
        }
    },
      methods:{
       add(){

            this.$emit("add",this.index)
            //向父级传值，前面为函数，后面为参数
       
       },
       sub(){
           this.$emit("sub",this.index)
        
       }
   }
}
</script>
