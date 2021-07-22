import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/user/index.vue'
import userProfile from '../views/user/pages/userProfile.vue'
import certificateOfOriginPage from '../views/user/pages/certificateOfOriginPage.vue'
import taxPaymentPage from '../views/user/pages/taxPaymentPage.vue'
import birthCertificatePage from '../views/user/pages/birthCertificatePage.vue'
import login from '../views/user/pages/register.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
},
{
    path: '/login',
    name: 'login',
    component: login
},
{
    path: '/userProfile',
    name: 'userProfile',
    component: userProfile,
    beforeEnter: (to, from, next) => {
        if (localStorage.getItem("user")) {
            next()
        } else {
            next("/login")
        }
    }
},
{
    path: '/certificateOfOriginPage',
    name: 'certificateOfOriginPage',
    component: certificateOfOriginPage,
    beforeEnter: (to, from, next) => {
        if (localStorage.getItem("user")) {
            next()
        } else {
            next("/login")
        }
    }
},
{
    path: '/taxPaymentPage',
    name: 'taxPaymentPage',
    component: taxPaymentPage,
    beforeEnter: (to, from, next) => {
        if (localStorage.getItem("user")) {
            next()
        } else {
            next("/login")
        }
    }
},
{
    path: '/birthCertificatePage',
    name: 'birthCertificatePage',
    component: birthCertificatePage,
    beforeEnter: (to, from, next) => {
        if (localStorage.getItem("user")) {
            next()
        } else {
            next("/login")
        }
    }
},



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router