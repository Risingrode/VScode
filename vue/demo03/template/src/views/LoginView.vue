<template>
	<div>
		<from @submit.prevent="doLogin">
			<input type="text" v-model="username" placeholder="用户名">
			<input type="text" placeholder="密码">
			<button >登录</button>
		</from>
	</div>
</template>

<script>
export default{
	data(){
		return{
			username:""
		}
	},
	methods:{
		doLogin(){
			//本地存储
			//把this.username值传递给usr
			localStorage.setItem("username",this.username);
			//登录之后进行页面跳转
			this.$router.push("/");
			//localStorage.getItem("usr");//拿数据
		}
	}
}
</script>
