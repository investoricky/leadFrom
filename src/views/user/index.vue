<template>
  <div>
    <headerNav class="header" />

    <!-- <h1>This is the User Page</h1> -->
  </div>
</template>

<script>
import headerNav from "./static/headerNav.vue";

export default {
  components: {
    headerNav,
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