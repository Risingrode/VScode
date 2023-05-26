import { createRouter, createWebHashHistory } from "vue-router";
import List from "./components/List.vue"
import Blog from "./components/Blog.vue"
import Login from "./components/Login.vue"
import Layout from "./components/Layout.vue"
import Book from "./components/Book.vue"
import Video from "./components/Video.vue"
const router = createRouter({
    // hash模式 html5模式
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            component:Layout,
            children:[
                {
                    path:"/",
                    component:List
                },
                {
                    path:"/blog/:id",
                    component:Blog
                },
                {
                    path:"/video",
                    component:Video
                },
                {
                    path:"/book",
                    component:Book
                }
            ]
        },
        
        {
            path:"/login",
            component:Login
        }
    ]
});

// 导航守卫、路由守卫、路由拦截
router.beforeEach((to,from,next) => {
    // 验证token，只有存在token的时候，才能跳转到内容页。
    let token = localStorage.getItem("token");
    if(token || to.path === "/login"){
        next();
    }else{
        next("/login")
    }
})

export default router;