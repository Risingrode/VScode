<template>
  <div>
    <h1>数据：{{msg}}</h1>
    <button @click="logout">注销</button>
  </div>
</template>

<script>

import request from '../utils/request'

export default {
  data(){
    return {
      msg:""
    }
  },
  methods:{
    logout(){
      localStorage.setItem("token","");
      location.reload();
    },
    getMsg(){
      //let token=localStorage.getItem("token");
      request.get(`/Hello`)
      .then((res)=>{
        this.msg=res.data.data[0].msg;
      })
    }
  },
  created(){
    this.getMsg();
  }
}
</script>
