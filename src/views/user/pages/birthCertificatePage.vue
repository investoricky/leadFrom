<template>
  <div class="main">
    <nav class="navbar navbar-expand-sm navbar-light sticky-top">
      <router-link to="/" class="navbar-brand ml-5"
        >LEAD<span class="origin">FROM</span></router-link
      >
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
        <li class="nav-item ml-4">
          <div class="dropdown">
            <button class="dropbtn">
              <i class="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div class="dropdown-content px-2 py-1">
              <button on:click="logOut">Log Out</button>
            </div>
          </div>
        </li>
      </ul>
    </nav>
    <div class="userProfile d-md-flex d-sm-block justify-content-between">
      <div class="userDetailSection">
        <div class="userInfo ml-5">
          <h3>Birth Certificate</h3>
          <p class="pt-3">Service not yet Implemented</p>
          <!-- <modalBtn /> -->
          <div class="mt-5"><router-link to="/userProfile" class="text-primary routeBtn">back to profile</router-link></div>
        </div>
      </div>
      <div class="sideMenuWrap ml-5 px-2 py-3">
        <h4 class="text-dark">Select a Service</h4>
        <div class="certificateWrap d-flex mt-3">
          <div class="div">
            <img src="@/assets/certificate-icon.png" alt="image" />
          </div>
          <div class="writeUpWrap ml-3">
            <h5>Certificate of Origin</h5>
            <p class="pt-3">
              Get your Certificate of Origin from your Local Government anywhere
              you are with ease
            </p>
            <a @click="certificateOfOriginPage" href="" class="text-primary"
              >get certificate</a
            >
          </div>
        </div>
        <div class="certificateWrap d-flex mt-3">
          <div class="div">
            <img src="@/assets/notarization-icon.png" alt="image" />
          </div>
          <div class="writeUpWrap ml-3">
            <h5>Tax Payment</h5>
            <p class="pt-3">
              Get your Certificate of Origin from your Local Government anywhere
              you are with ease
            </p>
            <a @click="taxPaymentPage" href="" class="text-primary"
              >get certificate</a
            >
          </div>
        </div>
        <div class="certificateWrap d-flex mt-3">
          <div class="div">
            <img src="@/assets/birth-certificate-icon.png" alt="image" />
          </div>
          <div class="writeUpWrap ml-3">
            <h5>Nigerian Birth Certificate</h5>
            <p class="pt-3">
              Get your Birth Certificate from your Local Government anywhere you
              are with ease
            </p>
            <a @click="birthCertificatePage" href="" class="text-primary"
              >get certificate</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import modalBtn from "../verification/formModal.vue";
export default {
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    // if (localStorage.getItem("reloaded")) {
    // The page was just reloaded. Clear the value from local storage
    // so that it will reload the next time this page is visited.
    // localStorage.removeItem("reloaded");
    // } else {
    // Set a flag so that we know not to reload the page twice.
    // localStorage.setItem("reloaded", "1");
    // location.reload();
    // }
  },

  methods: {
    logOut() {
      this.$store.dispatch("logout");
    },
    async created() {
      try {
        const response = await this.axios.get("user");
        this.user = response.data.user;
        alert(99);
      } catch (error) {
        console.log(error);
      }
    },
    certificateOfOriginPage() {
      this.$router.replace({
        path: "/certificateOfOriginPage",
        query: { name: "next" },
      });
    },
    taxPaymentPage() {
      this.$router.replace({
        path: "/taxPaymentPage",
        query: { name: "next" },
      });
    },
    birthCertificatePage() {
      this.$router.replace({
        path: "/birthCertificatePage",
        query: { name: "next" },
      });
    },
  },
  components: {
    // modalBtn,
  },
};
</script>

<style scoped>
ul {
  list-style-type: none !important;
}
.navbar {
  padding: 0px 115px !important;
  box-shadow: 0 0 5px;
  background-color: #fff;
}
.navbar-brand {
  font-size: 2rem;
}
.nav-item a:hover {
  color: #007e33 !important;
}
.origin {
  color: #007e33;
}
.navbar-toggler {
  border-radius: 13px;
}
.dropbtn {
  background-color: #fff;
  color: #007e33;
  padding: 16px;
  font-size: 30px;
  border: none;
  cursor: pointer;
  outline: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  border-radius: 5px;
  min-width: 120px;
  left: -15px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  text-decoration: none;
}

.dropdown-content a:hover {
  color: #007e33;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.fa-user-circle {
  color: #007e33;
}
.text {
  overflow: auto;
}
.userProfile {
  padding: 50px 115px !important;
  background-color: #f7f5ee;
  min-height: 100vh;
}
.sideMenuWrap {
  background-color: #f7f5ee;
  width: 30%;
  height: 50%;
  border-radius: 5px;
  text-align: start;
}
.imageProfileCard {
  background-color: #007e32ce;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.logOutOption {
  border-bottom: none !important;
}
.logOutLink:hover {
  color: #007e33 !important;
}
.fa-user-circle-o {
  font-size: 150px !important;
}
.sideMenuWrap ul :nth-child(1) {
  line-height: 3;
}
.sideMenuWrap ul li:hover {
  color: #007e32ce !important;
  transition: 1s;
}
.routeBtn {
  font-style: italic;
  text-decoration: underline !important;
}
a,
.fa-sign-out {
  text-decoration: none !important;
  color: #000;
  border-bottom: none !important;
}
.userDetailSection {
  width: 69%;
  height: 50%;
}
.userInfo {
  text-align: start;
  font-weight: 100;
}
.userInfo input::placeholder {
  text-align: center;
}
.nameBorder {
  border-bottom: 1px solid #e4e4e4;
  width: 50%;
}
.getCertificateLink {
  color: #fff;
  border-radius: 5px;
  background-color: #007e33;
  outline: none;
  border: none;
}
.certificateWrap img {
  width: 3rem;
  background-color: #f7f5ee;
}
.certificateWrap p,
a {
  font-size: 14px;
}
.certificateWrap h5 {
  color: #007e33;
}

@media only screen and (max-width: 768px) {
  .navbar {
    padding: 0px 10px !important;
  }
  .navbar-brand,
  .nav-item,
  .sideMenuWrap {
    margin: 0 !important;
  }
  .navbar-brand {
    padding-left: 18px !important;
  }
  .userInfo {
    margin-left: 20px !important;
  }
  .logOut {
    display: block;
  }
  input::placeholder {
    text-align: center;
  }
  .userInfo input {
    width: 100%;
    padding: 10px 20px !important;
  }
  .userInfo input::placeholder {
    text-align: center;
    padding: 0px !important;
  }
  .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
    -webkit-animation-duration: 5s;
    animation-duration: 5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .userProfile {
    padding: 10px !important;
  }
  .sideMenuWrap {
    width: 100%;
    margin-top: 30px !important;
  }
  .sideMenuWrap h4 {
    padding-left: 12px !important;
  }
  .sideMenuWrap ul {
    display: none;
  }
  .certificateWrap {
    padding: 7px !important;
  }
  .userDetailSection {
    width: 100%;
    margin-top: 30px !important;
  }
  .userDetailHeader {
    text-align: center;
  }
  .detailText,
  .firstName,
  .nameBorder {
    padding: 10px !important;
  }
}
.dropdown-content {
  min-width: 5rem;
}
</style>