<template>
    <HelloWorld 
        @up="number++"
        @down="number--"
    >
    {{number}}
    </HelloWorld>
    
    <h1>{{msg}}</h1>
    <div class="header"></div>
    <div class="container">
        <div class="nav"></div>
        <div class="content">
            <h1>
                {{ number }}
            </h1>
        </div>
    </div>
</template>

<script>
import sum from "./utils/sum";
import HelloWorld from "./components/HelloWorld.vue";
import imgSrc from "./assets/logo.png";
export default {
    data() {
        return {
            src: "/logo.png",
            number:0
        };
    },
    created() {
        console.log(this.src);
    },
    name: "App",
    components: {
        HelloWorld,
    },
};
</script>

<style scoped>
.header {
    height: 100px;
    border: 1px solid blue;
}
.container {
    display: flex;
}
.nav {
    flex: 1;
    height: 800px;
    border: 1px solid red;
}
.content {
    flex: 5;
    height: 800px;
    border: 1px solid green;
}
</style>
