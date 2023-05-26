<template>
    <h1>苹果 0.5元一斤</h1>
    <button @click="decrease">-</button>
    <span>{{number}}</span>
    <button @click="increase">+</button>
    <h2>总价：{{totalPrice}}</h2>
</template>

<script>
import { ref, computed } from "vue"
import counter from "./counter.js"
export default {
    setup() {
        const number = ref(0)
        const {increase, decrease} = counter(number)
        const totalPrice = computed(() => {
            return number.value * 0.5;
        })
        return {
            number,
            increase,
            decrease,
            totalPrice
        }
    }
}
</script>