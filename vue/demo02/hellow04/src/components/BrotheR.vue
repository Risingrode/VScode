<template>
  <div>
    <h1>brother
    <button @click="changeData">
    改变按钮</button></h1>
    <p>{{state.message}}</p>
  </div>
</template>
<script>

import store from "../store"

export default {
  data() {
      return {
        state:store.state 
	    }
    },
    methods:{
        //改变主句的数据改变
        changeData(){
        store.setStateMessage("brotherData")
        }
    }
}
</script>