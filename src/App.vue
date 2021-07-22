<template>
  <div id="app">
    <router-view />
    <!-- <h1>{{ tok }}</h1>
    <p>{{ user }}</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tok: "",
      user: "",
    };
  },
  mounted() {
    this.tok = this.$store.getters.isLoggedIn;
    this.user = this.$store.getters.getUser;
    // localStorage.removeItem("user");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
h1,
h2,
h3,
h4 {
  font-family: "Merriweather", serif;
}

p,
h5 {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}

a {
  text-decoration: none;
}

.btn {
  font-family: "Ubuntu", sans-serif;
}
</style>
