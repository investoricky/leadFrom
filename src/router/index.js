import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/user/index.vue'
import userProfile from '../views/user/pages/userProfile.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
    path: '/userProfile',
        name: 'userProfile',
        component: userProfile
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router