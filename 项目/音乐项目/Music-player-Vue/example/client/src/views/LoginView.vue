<template>
  <div>
        <h1>登录</h1>
        <form @submit.prevent="login">
            <input type="text" v-model="username">
            <button>登录</button>
        </form>
        
  </div>
</template>

<script>

import request from '../utils/request'

export default{

    data(){
        return {
            username:""
        }
    },
    methods:{
        login(){
            request.post(`/login`,{username:this.username})
            .then((res)=>{
                if(res.data.code===20000){
                    localStorage.setItem("token",res.data.token);
                    this.$router.push("/login");
                }
            })
        }
    }
}
</script>

