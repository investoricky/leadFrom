<template>
  <div class="services-container" id="services">
    <h2 class="services mb-4">Services</h2>
    <div
      class="
        d-md-flex d-sm-block
        align-items-center
        justify-content-center
        service-content
        px-3
        pt-4
        pb-2
      "
    >
      <div class="certificate-container text-center p-4 mx-2 mb-2" data-aos="flip-left">
        <h4>Certificate of Origin</h4>
        <p class="py-3">
          The process is performed by The Local Government <br />
          alongside our team of Tech Experts; <br />
          which includes vetting, certifying and record-keeping.
        </p>
        <div
          class="btn btn-muted border border-success"
          @click="goToDetailsPage"
        >
          View More
        </div>
      </div>
      <div class="tax-container text-center p-4 mx-2 mb-2" data-aos="flip-right">
        <h4>Tax Payment</h4>
        <p class="py-3">
          The process is performed by The Local Government <br />
          alongside our team of Tech Experts; <br />
          which includes vetting, certifying and record-keeping.
        </p>
        <div class="btn btn-muted border border-success">View More</div>
      </div>
    </div>
    <div
      class="
        d-md-flex d-sm-block
        align-items-center
        justify-content-center
        px-3
        pb-2
      "
    >
      <div class="certificate-container text-center p-4 mx-2 mb-2" data-aos="flip-up">
        <h4>Birth Certificate</h4>
        <p class="py-3">
          The process is performed by The Local Government <br />
          alongside our team of Tech Experts; <br />
          which includes vetting, certifying and record-keeping.
        </p>
        <div class="btn btn-muted border border-success">View More</div>
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
  padding-bottom: 5rem;
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
  /* box-shadow: 0 0px 5px rgba(51, 51, 51, 0.282); */
}
@media screen and (max-width: 768px) {
  .service-content {
    padding: 20px 7px !important;
  }
  p {
    font-size: 17px;
  }
}
</style>