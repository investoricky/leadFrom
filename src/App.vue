<template>
  <div id="app">
    <router-view/>
  </div>
</template>

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
h1, h2, h3, h4{
  font-family: 'Merriweather', serif;
  }

  p, h5{
     font-family: 'Montserrat', sans-serif; 
     font-weight: 500;
  }

  a{
    text-decoration: none;
  }

  .btn{
    font-family: 'Ubuntu', sans-serif;
  }
</style>
