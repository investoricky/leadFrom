<template>
       <nav class="navbar navbar-expand-lg bg-light px-md-5">
            <div class="container">
              <a class="navbar-brand fw-bold" href="#home">my<span class="brand-span">Origin</span></a>
              <button class="navbar-toggler bg-transparent" type="button" @click="navigate">
                <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
              </button>

              <div class="collapse navbar-collapse d-flex flex-column flex-lg-row mobile-menu" id="navbarNavDropdown">
                <ul class="navbar-nav ms-lg-auto me-lg-5 mb-2 mb-lg-0 pb-1">
                  <li class="nav-item me-lg-5 ">
                    <a class="nav-link px-0 pb-0 active" aria-current="page" href="#home" @click="navigate">Home</a>
                  </li>
                  <li class="nav-item mt-3 mt-lg-0 me-lg-5">
                    <a class="nav-link px-0 pb-0" href="#about" @click="navigate">About</a>
                  </li>
                  <li class="nav-item mt-3 mt-lg-0 me-lg-5">
                    <a class="nav-link px-0 pb-0" href="#faq" @click="navigate">FAQ</a>
                  </li>
                  <li class="nav-item mt-3 mt-lg-0">
                    <a class="nav-link px-0 pb-0" href="#contact" @click="navigate">Contact</a>
                  </li>
                </ul>
                <div>
                  <a><button class="btn btn-outline-success py-1 mt-5 mt-lg-0 border-2 fw-bold" type="button" @click="loginForm">Login</button></a>
                </div>
                <div class="times">
                  <i class="fas fa-times" @click="navigate"></i>
                </div>
              </div>
            </div>
          </nav>
</template>

<script>
export default {
    data(){
        return{
           show: false
        }
    },
    methods: {
        navigate: ()=> {
        document.getElementById("navbarNavDropdown").classList.toggle("show")
      },

      loginForm(){
        document.getElementById("navbarNavDropdown").classList.toggle("show")
      }
    }
}

</script>

<style scoped>
    
.navbar{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: 0 0.2rem 0.8rem rgba(95, 95, 95, 0.575);
}

.navbar a{
    color: black;
    font-weight: bold;
}

.navbar-nav a:hover, .navbar-nav a:active, .navbar-nav a:focus{
    color: #007e33;
}

.active {
  color: #007e33;
}

.navbar-brand{
    font-size: 1.5rem;
}

.brand-span{
  color: #007e33;
}

.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: none;
}

.times{
  display: none;
  color: grey;
  display: none;
  font-size: 30px;
}

@media screen and (max-width: 992px) {
  .fa-bars{
  color: #007e33;
  font-size: 1.8rem;
}

.mobile-menu{
        position: fixed;
        top: 0;
        left: -100%;
        border: none;
        width: 100vw;
        height: 100vh;
        text-align: center;
        background-color: rgb(255, 255, 255);
        z-index: 10;
        transition: left 0.7s;
        align-items: center;
        padding-top: 100px;
    }

    .show{
        left: 0;
    }

    .times{
      display: block;
      position: absolute;
      top: 20px;
      right: 20px;
    }

}

</style>