import Vue from 'vue'
import VueRouter from 'vue-router'


const Index = () => import('../views/index/index.vue')
const Login = () => import("../views/login/login.vue")
const StuDetail = () => import("../views/details/studentDetails.vue")
const StuWarn = () => import("../views/index/studentwarn.vue")
const StuCore = () => import("../views/index/studentscore.vue")
const StuData = () => import("../views/index/data/studentdata.vue")
const ClassData = () => import("../views/index/data/classdata.vue")
const Personal = () => import("../views/personal/personal.vue")
const PersonalGrade = () => import("../views/personal/personalgrade.vue")
const ManageTea = () => import("../views/index/manageTea.vue")
const Course = () => import("../views/course/index.vue")
const ClassDetails = () => import("../views/course/profile/classDetails.vue")


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
    },
    {
        path: '/index',
        name: 'index',
        component: Index,
        children: [{
            path: '/Course',
            name: 'Course',
            component: Course,
            children: [
                {
                    path: '/Course/ClassDetails',
                    name: 'ClassDetails',
                    component: ClassDetails,
                },
            ]
        },
        {
            path: '/ManageTea',
            name: 'ManageTea',
            component: ManageTea,
        },
        {
            path: '/personal',
            name: 'personal',
            component: Personal,
        },
        {
            path: '/personalgrade',
            name: 'personalgrade',
            component: PersonalGrade,
        },
        {
            path: '/StuData',
            name: 'StuData',
            component: StuData,
        },
        {
            path: '/ClassData',
            name: 'ClassData',
            component: ClassData,
        },
        {
            path: '/studendscore',
            name: 'studendscore',
            component: StuCore,
        },
        {
            path: '/studendwarn',
            name: 'studendwarn',
            component: StuWarn,

        },
        ]
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