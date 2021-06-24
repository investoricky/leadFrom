<template>
    <div>
        <headerNav />
        <home />
        <about />
        <faq />
        <contact />
        <homeFooter />
        <!-- <h1>This is the User Page</h1> -->
    </div>
</template>

<script>
import headerNav from "./static/headerNav.vue";
import home from "./static/home.vue";
import about from "./static/about.vue";
import faq from "./static/faq.vue";
import contact from "./static/contact.vue";
import homeFooter from "./static/homeFooter.vue"

export default {
    components: {
        headerNav,
        home,
        about,
        faq,
        contact,
        homeFooter
    },
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
 
</style>