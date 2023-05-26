<template>
    <button @click="increase">+</button>
    <!-- 插槽 -->
    <slot></slot>
    <button @click="decrease">-</button>
</template>

<script>
export default {
    props:["msg"],
    methods:{
        increase(){
            this.$emit("up");
        },
        decrease(){
            this.$emit("down");
        }
    }
}
</script>
