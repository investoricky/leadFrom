<template>
  <div>
    <headerNav class="header" />
      <home />
      <about />
      <services />
    <!-- <h1>This is the User Page</h1> -->
  </div>
</template>

<script>
import headerNav from "./static/headerNav.vue"
import home from "./static/home.vue"
import about from "./static/about.vue"
import services from "./static/services.vue"



export default {
  components: {
    headerNav,
    home,
    about,
    services,
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