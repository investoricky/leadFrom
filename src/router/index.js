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
    path: '/userProfile',
    name: 'userProfile',
    component: userProfile
},
{
    path: '/certificateOfOriginPage',
    name: 'certificateOfOriginPage',
    component: certificateOfOriginPage
},
{
    path: '/taxPaymentPage',
    name: 'taxPaymentPage',
    component: taxPaymentPage
},
{
    path: '/birthCertificatePage',
    name: 'birthCertificatePage',
    component: birthCertificatePage
},
{
    path: '/login',
    name: 'login',
    component: login
},


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router