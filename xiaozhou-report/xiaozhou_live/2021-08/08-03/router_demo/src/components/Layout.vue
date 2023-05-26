<template>
    <router-link to="/">博客</router-link> | 
    <router-link to="/video">视频</router-link> | 
    <router-link to="/book">电子书</router-link> | 
    <button @click="logout">注销</button>
    <router-view></router-view>
</template>

<script>
export default {
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push("/login")
        }
    }
}
</script>