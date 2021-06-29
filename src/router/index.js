import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/user/index.vue'
import userProfile from '../views/user/pages/userProfile.vue'
import firstStep from '../views/user/verification/firstStep.vue'
import secondStep from '../views/user/verification/secondStep.vue'
import thirdStep from '../views/user/verification/thirdStep.vue'
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
        path: '/firstStep',
        name: 'firstStep',
        component: firstStep
    },
    {
        path: '/secondStep',
        name: 'secondStep',
        component: secondStep
    },
    {
        path: '/thirdStep',
        name: 'thirdStep',
        component: thirdStep
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