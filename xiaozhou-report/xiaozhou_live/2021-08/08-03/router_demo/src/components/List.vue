<template>
    <h1>列表</h1>
    <ul>
        <li v-for="item in blogList">
            <router-link :to="'/blog/' + item.id">
                {{item.title}}
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    created(){
        console.log(localStorage.getItem("name"))
    },
    data(){
        return {
            blogList:[
                {id:1,title:"html与css基础"},
                {id:2,title:"JavaScript从入门到放弃"},
                {id:3,title:"精通Node"},
                {id:4,title:"从零开始学Ajax"},
                {id:5,title:"你不知道的Vue"},
            ],
            abc,
            def,
            xxy
        }
    },
    methods:{
        test1(){},
        test2(){},
        test3(){},
        test4(){},
        test5(){}
}
</script>