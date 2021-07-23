<template>
  <div>
    <div class="container">
      <div class="test1">
        <h2>Testimonials</h2>
        <p class="px-4">We have been working with clients all over the world</p>
      </div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide py-4"
        data-bs-ride="carousel"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active slide-button"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-target="#carouselExampleIndicators"
            data-slide-to="1"
            aria-label="Slide 2"
            class="slide-button"
          ></button>
        </div>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <div class="d-md-flex d-sm-block justify-content-between">
              <div class="">
                <div class="text">
                  <h6>Easy Payment Method</h6>
                  <p>
                    Using LeadFrom, I have been able to make payment for LGA
                    services quickly and without any hassle.
                  </p>
                </div>
                <div class="text-center image-data">
                  <img
                    src="https://starthub.com.ng/wp-content/uploads/2021/02/akisan-14.jpg?v=1617711419"
                    alt="First slide"
                    class="profile-images"
                  />
                  <h6>Eno-Obong Enoh</h6>
                  <p>Senior Backend Developer</p>
                </div>
              </div>

              <div class="mx-5">
                <div class="text">
                  <h6>Safe and Secure Platform</h6>
                  <p>
                    I had my reservations about using PlatFrom at first, but I
                    gave it a try and FxHup helped me request and get my
                    certificates easily.
                  </p>
                </div>
                <div class="text-center image-data">
                  <img
                    src="https://starthub.com.ng/wp-content/uploads/2021/02/Akisan-2-scaled-768x1024.jpg?v=1617711453"
                    class="profile-images"
                    alt="First slide"
                  />
                  <h6>Joseph Bassey</h6>
                  <p>Senior Web Developer</p>
                </div>
              </div>
              <div class="">
                <div class="text">
                  <h6>Mindblowing Service</h6>
                  <p>
                    FlatFrom will be one of the most reliable e-governance
                    platform. They're solving what seems to be a conundrum.
                  </p>
                </div>
                <div class="text-center image-data">
                  <img
                    src="https://starthub.com.ng/wp-content/uploads/2021/02/Akisan-1-scaled-e1612200278663-768x1024.jpg?v=1617711456"
                    class="profile-images"
                    alt="First slide"
                  />
                  <h6>Vivian Eshiet</h6>
                  <p>Application Tester</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-md-flex d-sm-block justify-content-between">
              <div class="">
                <div class="text">
                  <h6>Easy Payment Method</h6>
                  <p>
                    Using LeadFrom, I have been able to make payment for LGA
                    services quickly and without any hassle.
                  </p>
                </div>
                <div class="text-center image-data">
                  <img
                    src="https://starthub.com.ng/wp-content/uploads/2021/02/akisan-14.jpg?v=1617711419"
                    alt="First slide"
                    class="profile-images"
                  />
                  <h6>Eno-Obong Enoh</h6>
                  <p>Senior Backend Developer</p>
                </div>
              </div>

              <div class="mx-5">
                <div class="text">
                  <h6>Safe and Secure Platform</h6>
                  <p>
                    I had my reservations about using PlatFrom at first, but I
                    gave it a try and FxHup helped me request and get my
                    certificates easily.
                  </p>
                </div>
                <div class="text-center image-data">
                  <img
                    src="https://starthub.com.ng/wp-content/uploads/2021/02/Akisan-2-scaled-768x1024.jpg?v=1617711453"
                    class="profile-images"
                    alt="First slide"
                  />
                  <h6>Joseph Bassey</h6>
                  <p>Senior Web Developer</p>
                </div>
              </div>
              <div class="">
                <div class="text">
                  <h6>Mindblowing Service</h6>
                  <p>
                    FlatFrom will be one of the most reliable e-governance
                    platform. They're solving what seems to be a conundrum.
                  </p>
                </div>
                <div class="text-center image-data">
                  <img
                    src="https://starthub.com.ng/wp-content/uploads/2021/02/Akisan-1-scaled-e1612200278663-768x1024.jpg?v=1617711456"
                    class="profile-images"
                    alt="First slide"
                  />
                  <h6>Vivian Eshiet</h6>
                  <p>Application Tester</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  padding: 5rem 0;
}
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.test {
  background: #f9f9fa;
  padding: 5rem 0;
}
.test h2 {
  font-weight: bold;
}
.test1 {
  text-align: center;
}
.test2 img {
  width: 100%;
}
.carousel-indicators {
  bottom: -2rem;
}
.text {
  background-color: #fff;
  padding: 1rem 1rem;
  position: relative;
  text-align: center;
  border-radius: 11px;
}
.text h6 {
  font-size: larger;
  color: #000;
  font-weight: bold;
  padding-top: 1rem;
}

.text p {
  padding-top: 0.6rem;
  font-size: 0.9rem;
  line-height: 1.5rem;
}

/* .text::after {
  content: "";
  position: absolute;
  left: 47%;
  bottom: -0.5rem;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-radius: 20px solid transparent;
  border-top: 20px solid #fff;
  transform: rotate(135deg);
} */
.carousel-indicators .active {
  width: 18px !important;
  height: 18px !important;
  border-radius: 50% !important;
  background-color: transparent;
  border: 2px solid #1c924b;
}
.carousel-indicators {
  display: none;
}
</style>