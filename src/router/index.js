import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/user/index.vue'
import userProfile from '../views/user/pages/userProfile.vue'
import login from '../views/user/pages/register.vue'
import preview from '../views/user/verification/preview.vue'

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
{
    path: '/login',
    name: 'login',
    component: login
},

{
    path: '/preview',
    name: 'preview',
    component: preview
},
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router