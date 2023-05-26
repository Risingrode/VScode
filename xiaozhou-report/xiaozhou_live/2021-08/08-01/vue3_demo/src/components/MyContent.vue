<template>
    <h1>Hello Vue</h1>
    <h2>这个是应用的主体部分</h2>
    <h1>{{number}}</h1>
</template>

<script>
import { add } from "../utils/sum.js"
export default {
    computed:{
        number(){
            
            return add();
        }
    }
}

</script>
