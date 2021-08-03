import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import NaijaStates from 'naija-state-local-government';
import 'sweetalert2/dist/sweetalert2.min.css';
import '../src/utils/http'
import AOS from 'aos'
import 'aos/dist/aos.css'


Vue.use(AOS);
Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios)
Vue.use(NaijaStates);

Vue.config.productionTip = false

new Vue({
    created() {
        AOS.init({
            duration: 1000,
            // delay: 500
        })
    },
    router,
    store,
    render: h => h(App)
}).$mount('#app')