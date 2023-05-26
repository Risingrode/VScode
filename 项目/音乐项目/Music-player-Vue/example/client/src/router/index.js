import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login

    }
]

const router = new VueRouter({
    //mode: 'history',
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path == "/login") {
        next();
    } else {
        let token = localStorage.getItem("token");
        if (token) {
            next();
        } else {
            next("/login");
        }
    }
})

export default router