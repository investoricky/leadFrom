<template>
  <div class="about-container py-5" id="about">
    <div class="about-writeup align-items-center px-5 py-3">
      <h2 class="title about pb-0">About Us</h2>
      <p class="py-5 text-center" data-aos="fade-up" data-aos-anchor-placement="top-center">
        We provide an infrastructure that makes the delivery of government services 
        easier and convenient for both the citizen and the government. We also provide a
        service that can be accessed remotely and from anywhere in the world
        thereby aiding the government to expand it's reach and also generating additional
        revenue.
      </p>
    </div>
    <div
      class="
        logo-section
        d-flex
        my-5
        align-items-center
        justify-content-around
        pl-5
      "
    >
      <div class="logo text-center pl-3 mt-5">
        <img class="emblem" src="@/assets/emblem.png" alt="image" />
      </div>
      <div class="logo text-center pl-5 mt-5">
        <img class="akisan" src="@/assets/akisan.png" alt="image" />
      </div>
      <div class="logo text-center">
        <img class="starthub" src="@/assets/starthub.png" alt="image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.about-container {
  background-color: #f8f9fa !important;

  padding-top: 5rem !important;
}
h2 {
  color: #1e880d;
  /* border-bottom: 3px solid #1e880d; */
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
  width: 70%;
  height: 0.27rem;
  background-color: rgba(0, 0, 0, 0.5);
  background-color:  #1e880d;
  margin-top: 0.1rem;
  margin-left: 1.5rem;
}
.logo-section {
  background: #eeedeb;
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
  /* .title::before {
    display: none;
  }
  .about::after {
    margin-left: 0;
  } */
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