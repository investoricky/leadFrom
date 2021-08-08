<template>
  <div class="services-container" id="services">
    <h2 class="services mb-4">Services</h2>
    <div class="d-md-flex d-sm-block align-items-center justify-content-center service-content px-3 pt-4 pb-2">
      <div class="certificate-container text-center p-4 mx-2 mb-2" data-aos="fade-zoom-in">
        <img src="@/assets/certificate-icon.png" alt="image" />
        <h4>Certificate of Origin</h4>
        <p class="py-3">
          The process is performed by The Local Government <br />
          alongside our team of Tech Experts; <br />
          which includes vetting, certifying and record-keeping.
        </p>
      </div>
      <div class="certificate-container text-center p-4 mx-2 mb-2" data-aos="fade-zoom-in">
        <img src="@/assets/birth.png" alt="image" />
        <h4>Birth Certificate</h4>
        <p class="py-3">
          The process is performed by The Local Government <br />
          alongside our team of Tech Experts; <br />
          which includes vetting, certifying and record-keeping.
        </p>
      </div>
      <div class="tax-container text-center p-4 mx-2 mb-2" data-aos="fade-zoom-in">
        <img src="@/assets/taxx.png" alt="image" />
        <h4>Tax Payment</h4>
        <p class="py-3">
          The process is performed by The Local Government <br />
          alongside our team of Tech Experts; <br />
          which includes vetting, certifying and record-keeping.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goToDetailsPage() {
      this.$router.push("/certificateOfOriginPage");
    },
  },
};
</script>

<style scoped>
.services-container {
  background-color: #f8f9fa !important;

  min-height: 50vh;
  padding: 2rem 5rem;
}
h4 {
  color: #1e880d;
  padding-top: 20px !important;
}
.services {
  font-weight: 500;
  color: #1e880d;
  border-bottom: 3px solid #1e880d;
  width: fit-content;
  text-align: center;
  margin: 0 auto;
}
.certificate-container,
.tax-container {
  background: #eeedeb;
  height: max-content;
  border-radius: 10px;
}
.certificate-container img {
  width: 3rem;
}
.tax-container img {
  width: 2.3rem;
}
@media screen and (max-width: 768px) {
  .service-content {
    padding: 20px 7px !important;
  }
  p {
    font-size: 17px;
  }
  .services-container {
    padding: 3px;
  }
  .certificate-container,
  .tax-container {
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);
  }
}
</style>