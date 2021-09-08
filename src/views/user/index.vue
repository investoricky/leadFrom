<template>
  <div>
    <i class="fa fa-arrow-up scrollTop" onclick="scrollToTop();" aria-hidden="true"></i>
    <headerNav class="header" />
    <home />
    <about />
    <services />
    <remarks />
    <homeFooter />
  </div>
</template>

<script>
import headerNav from "./static/headerNav.vue";
import home from "./static/home.vue";
import about from "./static/about.vue";
import services from "./static/services.vue";
import remarks from "./static/remarks.vue";
import homeFooter from "./static/homeFooter.vue";

export default {
  components: {
    headerNav,
    home,
    about,
    services,
    remarks,
    homeFooter,
  },
  data() {
    return {
      user: null,
    };
  },
};
</script>

<style scoped>
</style>