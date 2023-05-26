<template>
  <button @click="increase">+</button>
  <slot></slot>
  <button @click="decrease">-</button>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods:{
    increase(){
      this.$emit("up")
    },
    decrease(){ 
      this.$emit("down")
    }
  }
}
</script>
