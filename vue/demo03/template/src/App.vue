<template>
<div id="app">
	<div id="nav">
		<!-- a标签 -->
		<router-link to="/">首页</router-link> |
		<router-link to="/blog">博客</router-link>|
		<router-link to="/video">视频</router-link>||
		<span v-if="showUser">欢迎：{{username}} <button @click="logout">注销</button></span>
		<!-- <router-link to="/login">登录</router-link> -->
	</div>
	<div class="container">
		<router-view/>
	</div>
	
</div>
</template>

<script>

export default{
	data(){
		return{
			username:localStorage.getItem("username"),
			showUser:localStorage.getItem("username")//bool类型
		}
	},
	methods:{
		logout(){
			//清空本地存储值操作
			localStorage.clear(),
			//自动跳转
			this.$router.push("/login")
		}
	},
	//侦听器
	watch:{
		//当路由切换时，实现该函数
		//不需要手动刷新就显示用户名了
		'$router.path':function(){
			this.username=localStorage.getItem("username"),
			this.showUser=localStorage.getItem("username")
		}
	}
}
</script>


















