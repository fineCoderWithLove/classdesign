import Vue from 'vue'
import VueRouter from 'vue-router'


const Index = () => import('../views/index.vue')
const Login = () => import("../views/login.vue")
const StuDetail = () => import("../views/studentDetails.vue")

Vue.use(VueRouter)

const routes = [
    // 默认首页显示
    {
        path: '/',
        redirect: '/Login'
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        children: []
    },
    {
        path: '/index',
        name: 'index',
        component: Index,
        children: []
    },
    {
        path: '/studetail',
        name: 'StuDetail',
        component: StuDetail
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router