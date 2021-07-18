<template>
  <div class="main">
    <nav class="navbar navbar-expand-sm navbar-light sticky-top">
      <a class="navbar-brand" href="#">my<span class="origin">Origin</span></a>
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
      <div class="sideMenuWrap">
        <div class="imageProfileCard px-4 py-4">
          <i class="fa fa-user-circle-o logOutIcon" aria-hidden="true"></i>
          <h3 class="pt-3">John Doe</h3>
        </div>
        <ul class="px-5 mb-0">
          <li class="logOutOption">
            <i class="fa fa-sign-out text-muted" aria-hidden="true"></i>
            <router-link to="/" class="text-muted logOutLink"
              >Log Out</router-link
            >
          </li>
        </ul>
      </div>
      <div class="userDetailSection">
        <div class="userDetailHeader px-5 py-2">
          <h4 class="text-muted pt-2">User Details</h4>
        </div>
        <div class="userInfo mt-2 py-4">
          <div class="d-flex detailText px-5 py-2">
            <p class="firstName ml-auto px-5 py-2 text-muted">First Name</p>
            <p class="nameBorder py-2 text-muted">{{ user }}</p>
            <div>{{ user }}</div>
          </div>
          <div class="d-flex detailText px-5 py-2">
            <p class="firstName ml-auto px-5 py-2 text-muted">Last Name</p>
            <p class="nameBorder py-2 text-muted">Doe</p>
          </div>
          <div class="d-flex detailText px-5 py-2">
            <p class="firstName ml-auto px-5 py-2 text-muted">Phone Number</p>
            <p class="nameBorder py-2 text-muted">090**********</p>
          </div>
          <div class="d-flex detailText px-5 py-2">
            <p class="firstName ml-auto px-5 py-2 text-muted">Email</p>
            <p class="nameBorder text py-2 text-muted">Johndoe@gmail.com</p>
          </div>
          <div class="d-flex detailText px-5 py-2">
            <p class="firstName ml-auto px-5 py-2 text-muted">Payment Status</p>
            <p class="nameBorder text py-2 text-muted">Not Paid</p>
          </div>
          <div class="px-5 text-center">
            <router-link to="/firstStep" class="getCertificateLink px-5 py-2"
              >Get Certifcate</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
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
  background-color: #fff;
  width: 20%;
  height: 50%;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);
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
a,
.fa-sign-out {
  text-decoration: none !important;
  color: #000;
  border-bottom: none !important;
}
.userDetailSection {
  width: 79%;
  height: 50%;
}
.userDetailHeader {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);
}
.userInfo {
  background-color: #fff;
  border-radius: 5px;
  text-align: start !important;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);
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

@media only screen and (max-width: 768px) {
  .navbar {
    padding: 0px 10px !important;
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
  }
  .sideMenuWrap ul {
    display: none;
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