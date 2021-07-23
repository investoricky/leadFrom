<template>
  <div
    class="bg-dak"
    style="background-color: #eeedeb !important; color: #fff !important"
  >
    <div id="contact" class="text-muted container">
      <div class="row py-5">
        <div class="col-md-6 one">
          <h4 class="text-one mb-5">Contact Our Team</h4>
          <input
            type="text"
            name=""
            id=""
            class="w-50 py-2 mr-4"
            placeholder="FULL NAME"
          /><input
            type="email"
            name=""
            placeholder="EMAIL"
            id=""
            class="w-50 my-3 py-2"
          />
          <input
            type="number"
            name=""
            id=""
            class="my-3 py-2"
            placeholder="PHONE NUMBER"
          />
          <input
            type="text"
            name=""
            id=""
            class="py-5 my-3"
            placeholder="YOUR MESSAGE"
          />
          <button class="btn btn-success">Contact Us</button>
        </div>
        <div class="col-md-6 two">
          <h4 class="text-one mb-5">Platfrom Group</h4>
          <div class="d-flex">
            <div><i class="fa fa-location-arrow" aria-hidden="true"></i></div>
            <div>
              <p>START INNOVATION HUB</p>
              <p>333 ORON ROAD OFF PHARMABLAZE PHARMACY</p>
              <p>ORON ROAD, UYO</p>
              <p>NIGERIA</p>
            </div>
          </div>
          <div class="d-flex my-4">
            <div><i class="fa fa-phone" aria-hidden="true"></i></div>
            <div>
              <a href="" class="text-muted">+234 701 4600 277</a>
            </div>
          </div>
          <div class="d-flex">
            <div><i class="fa fa-user-md" aria-hidden="true"></i></div>
            <div class="text-muted">
              <a href="" c>
                <i class="fa fa-facebook text-muted" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-twitter text-muted" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-linkedin text-muted" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-google text-muted" aria-hidden="true"></i>
              </a>
              <a href="">
                <i class="fa fa-instagram text-muted" aria-hidden="true"></i>
              </a>
              <p class="mt-5">
                <a href="" class="text-muted text-underline"
                  >PRIVACY POLICY AND COOKIE USE</a
                >
              </p>
            </div>
          </div>
        </div>
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
#contact {
  /* padding: 1rem 4rem; */
}
.fa {
  margin-right: 1rem;
  font-size: large;
}
.text-one {
  position: relative;
}
.text-one::after {
  position: absolute;
  content: "";
  width: 10%;
  bottom: -0.5rem;
  left: 0;
  background-color: green !important;
  color: green;
  height: 2px;
}
.text {
  margin-bottom: 0.8rem;
}
input {
  width: 100%;
}
.w-50 {
  width: 48% !important;
}
.one {
  padding-right: 3rem;
}
.two {
  padding-left: 3rem;
}
.fa {
  color: green;
}
.text-underline {
  text-decoration: underline !important;
}

@media (max-width: 600px) {
  #contact {
    padding: 1rem;
  }
  .text {
    margin-bottom: 1rem;
  }
  .one {
    padding-right: 1rem;
    margin-bottom: 4rem;
  }
  .two {
    padding-left: 1rem;
  }
}
@media (min-width: 792px) {
  .form {
    width: 500px !important;
  }
}
</style>