<template>
    <h1>{{title}}</h1>
    <button @click="changeTitle">改变数据</button>
</template>

<script>
import {ref} from "vue"
const title = ref("hello world")
export default {
    setup() {
        return {
            title
        }
    },
    methods:{
        changeTitle(){
            title.value = "hello Vue"
        }
    }
}
</script>