<template>
  <div class="about-container py-4" id="about">
    <div class="about-writeup align-items-center px-5 py-3">
      <h1 class="title">About Us</h1>
      <p class="py-3 text-center">
        We are an E-Governance platform that offer new opportunities for a more direct and convenient access to governmental services.
        We bridge the gap between the government and it's citizens by making sure essential services can be easily accessed by it's citizens.
        We also provide a service that can be accessed remotely and from anywhere in the world thereby expanding the government's reach and
        generating additional revenue.
      </p>
    </div>
    <div class="logo-section d-flex my-5 align-items-center justify-content-around pl-5">
      <div class="logo text-center pl-3 mt-5">
        <img class="emblem" src="@/assets/emblem.png" alt="image">
      </div>
      <div class="logo text-center pl-5 mt-5">
        <img class="akisan" src="@/assets/akisan.png" alt="image">
      </div>
      <div class="logo text-center">
        <img class="starthub" src="@/assets/starthub.png" alt="image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.about-container {
  background: #F1F8E9;
}
h1 {
  color: #1E880D;
  border-bottom: 3px solid #1E880D;
  width: fit-content;
  margin: 0 auto;
}
p {
  color: rgba(0, 0, 0, 0.8);
}
.about-writeup {
  /* background: #EEEDEB; */
  width: 70%;
  margin: 0 auto;
  border-radius: 10px;
  /* box-shadow: 0 0px 5px rgba(51, 51, 51, 0.282); */
}

.about::after {
  display: block;
  content: "";
  width: 4rem;
  height: 0.2rem;
  background-color: rgba(0, 0, 0, 0.5);
  background-color: rgb(99, 179, 99);
  margin-top: 0.8rem;
  margin-bottom: 3rem;
  margin-left: 2rem;
}
.logo-section {
  background: #EEEDEB;
  min-height: 20vh;
}
.logo {
  height: 10rem;
}
.emblem,
.akisan {
  width: 7rem;
  height: 7rem;
}
.starthub {
  width: 17rem;
  height: 15rem;
  margin-top: -45px;
}

@media screen and (max-width: 992px) {
  .about-writeup {
    padding: 10px !important;
    width: 85%;
  }
  p {
    font-size: 13px;
  }
  .title::before {
    display: none;
  }
  .about::after {
    margin-left: 0;
  }
  .logo-section {
    padding: 10px 0px !important;
  }
  .logo {
    padding: 0 !important;
    margin: 0 !important;
  }
  .emblem {
    width: 60%;
    height: 5rem;
    margin-top: 40px !important;
  }
  .akisan {
    width: 5rem;
    height: 5rem;
    margin-top: 40px !important;
  }
  .starthub {
    width: 10rem;
    height: 10rem;
    margin-top: 0 !important;
  }
}

@media screen and (max-width: 556px) {
}
</style>