<template>
  <div class="home">
    <section
      class="px-md-5 header-section"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/images/' + img + '.jpg') + ')',
      }"
      id="home"
    >
      <div class="container">
        <div class="pe-lg-5 text-left pt-5" data-aos="fade-right">

          <h2 class="mb-4 fw-bold">INTEGRATED LOCAL GOVERNMENT PORTAL</h2>

          <!-- <p class="smaller text-dark">
            Have you ever had difficulties getting your certificate of origin
            from your Local Government? We are here to take that load off your
            chest. With the<span class="origin">PLATFROM</span>, you can get
            yours right at the comfort of your home.
          </p> -->
          <p class="smaller text-dark">
            Cutting edge e-governance sysytem that brings you access to all local
            government services with just click of a button.
            From getting your <span class="origin">Certificate of Origin</span> to 
            <span class="origin">Paying your Taxes.</span> Your Journey of convinience begins now
          </p>
          <div class="get-btn-wrap">
            <router-link to="/login"
              ><button class="btn get-btn py-1" type="button">
                <small>Get Certificate</small>
              </button></router-link
            >
          </div>
        </div>
        <div
          class="
            d-flex
            align-self-center
            justify-content-center
            my-5 my-lg-0
            img
          "
        >
          <img src="@/assets/animation.gif" alt="" class="cert" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: "david-rotimi-LxENUKJXh_k-unsplash",
    };
  },
};
</script>

<style scoped>

@media screen and (max-width: 992px) {
  .header-section {
    height: max-content;
  }

  .header-section .container {
    height: 90%;
    width: 95vw;
    grid-template-columns: auto;
    padding-top: 50px;
  }
}

@media screen and (max-width: 556px) {
  .cert {
    display: none;
  }

  h2 {
    font-size: 2rem;
    line-height: 2.4rem;
    text-align: center;
  }
  p {
    text-align: center;
    font-size: 13px !important;
  }
  .get-btn-wrap {
    text-align: center !important;
  }
}
</style>