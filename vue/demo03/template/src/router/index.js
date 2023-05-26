import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Blog from "../views/BlogView.vue"
import Video from "../views/VideoView.vue"
import Login from "../views/LoginView.vue"

//整体页面放views里
//小组件放components里  可以复用
const routes = [{
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: "/video",
        name: "Video",
        component: Video
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

//导航守卫  审查拦截路由
//to 访问到那 from 从哪访问 next 正常访问
router.beforeEach((to, from, next) => {
    //to.path to的访问路径 
    if (to.path != "/login") {
        //如果找到值，就正常访问
        if (localStorage.getItem("username")) {
            next();
        } else {
            next("/login");
        }
    } else {
        next();
    }
})

export default router