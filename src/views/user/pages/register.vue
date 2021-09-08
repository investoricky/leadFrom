<template>
  <div
    class="
      loginContainer
      d-md-flex d-sm-block
      justify-content-center
      align-items-center
      px-5
    "
  >
    <div class="loginWrap">
      <input type="checkbox" id="flip" />
      <div class="cover">
        <div class="front">
          <img class="backImg" src="@/assets/images/globe.jpg" alt="image" />
          <div class="text">
            <!-- <span class="text1 px-1">Every new friend is a new adventure</span>
            <span class="text2">Let's get connected</span> -->
          </div>
        </div>
        <div class="back">
          <img class="backImg" src="@/assets/lady2.jpg" alt="image" />
          <div class="text">
            <!-- <span class="text1">Complete miles of journey with one step</span>
            <span class="text2">Let's get started</span> -->
          </div>
        </div>
      </div>
      <form action="#" @submit.prevent="login">
        <div class="formContent">
          <div class="loginForm">
            <div class="title">Login</div>
            <div class="inputBoxes">
              <div class="inputBox my-4">
                <i class="fas fa-envelope"></i>
                <input
                  v-model="userLogin.email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div class="inputBox">
                <i :class="password" @click="changeIcon"></i>
                <input
                  v-model="userLogin.password"
                  :type="passwordType"
                  placeholder="Password"
                  required
                />
              </div>
              <div class="password text-right">
                <a href="#" class=""> <small> Forgot password?</small></a>
              </div>
              <div class="button inputBox">
                <button class="login" type="submit">
                  <!-- <div class="spinner-border" role="status"> -->
                  <span
                    class="visually-hidde spinner-border"
                    role="status"
                    v-if="loginspinner"
                  ></span>
                  <!-- </div> -->
                  <span v-else>Login</span>
                </button>
              </div>
              <div class="text signUpText">
                Don't have an account? <label for="flip">Sign up now</label>
              </div>
            </div>
          </div>

          <!-- Sign-Up Section -->
          <div class="signUpForm">
            <div class="title">Sign Up</div>
            <form action="" @submit.prevent="signUp">
              <div class="inputBoxes">
                <div class="inputBox">
                  <i class="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Full name"
                    v-model="signup.name"
                    required
                  />
                </div>
                <!-- <div class="inputBox">
                  <i class="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Last name"
                    v-model="signUpDetails.lName"
                    required
                  />
                </div> -->
                <div class="inputBox">
                  <i class="fas fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Email"
                    v-model="signup.email"
                    required
                  />
                </div>
                <div class="inputBox">
                  <i class="fas fa-lock"></i>
                  <input
                    :type="InputPasswordType"
                    placeholder="Password"
                    v-model="signup.password"
                    required
                  />
                </div>
                <div class="inputBox">
                  <i class="fas fa-lock"></i>
                  <input
                    :type="InputPasswordType"
                    placeholder="Confirm password"
                    required
                    v-model="signup.password_confirmation"
                  />
                  <!-- <span style="float: right" class="m-4"
                    ><i class="fa fa-eye float-right" aria-hidden="true"></i
                  ></span> -->
                </div>
                <div class="button inputBox">
                  <button class="login" type="submit">
                    <!-- <div class="spinner-border" role="status"> -->
                    <span
                      class="visually-hidde spinner-border"
                      role="status"
                      v-if="spinner"
                    ></span>
                    <!-- </div> -->
                    <span v-else>Sign Up</span>
                  </button>

                  <!-- <input type="submit" value="submit"> -->
                </div>
                <div class="text loginText">
                  Already have an account?
                  <label for="flip">Login in now</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </form>
    </div>
    <div class="error" v-if="showError">
      {{ errorMsg }}
    </div>
  </div>
</template>

<script>
import api from "@/helpers/api.js";
export default {
  data() {
    return {
      InputPasswordType: "password",
      userLogin: {
        email: null,
        password: null,
      },
      signup: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      password: "fa fa-eye-slash",
      passwordType: "password",
      spinner: false,
      loginspinner: false,
      showError: false,
      errorMsg: "",
    };
  },
  methods: {
    //Function for changing eye icon and password field
    changeIcon: function () {
      if (this.password === "fa fa-eye-slash") {
        this.password = "fa fa-eye";
        this.passwordType = "text";
      } else {
        this.password = "fa fa-eye-slash";
        this.passwordType = "password";
      }
    },

    // Login Function
    login: async function () {
      //Toast function for successful login alert
      const Toast2 = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        background: "green",
        padding: "1px 5px",
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
      });
      try {
        this.loginspinner = true;
        // Creating user details holder and assigning it's value to input details
        const credentials = {
          email: this.userLogin.email,
          password: this.userLogin.password,
        };

        // getting a response from the Login Api
        var response = await this.axios.post("login", credentials);
        // const errorMsg = response.data.message;
        console.log(response);

        // getting user details and token
        const token = response.data.token;
        console.log(token);
        const user = response.data.user;
        console.log(user);

        // dispatching user login details to store
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);

        //store
        this.$store.dispatch("login", { token, user });
        this.$store.dispatch("login", token);

        //sweet alert
        Toast2.fire({
          icon: "success",
          iconColor: "green",
          title: `<small>Welcome ${response.data.user.name}</small>`,
          background: "#fff",
        });

        //Push to profile page
        this.$router.push("/userProfile");
      } catch (error) {
        this.loginspinner = false;

        // Toast mixin
        const Toast = this.$swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          background: "#c5c5c5",
          padding: "1px 5px",
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", this.$swal.stopTimer);
            toast.addEventListener("mouseleave", this.$swal.resumeTimer);
          },
        });

        //triggering the sweetAlert
        Toast.fire({
          icon: "error",
          title: `<small>${response.data.message}</small>`,
          background: "#c5c5c5",
        });
      }
    },

    async signUp() {
      // const data = {
      //   name: this.signup.name,
      //   email: this.signup.email,
      //   password: this.signup.password,
      //   password_confirmation: this.signup.password_confirmation,
      // };

      //Toast function for default styled alert
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        background: "#c5c5c5",
        padding: "1px 5px",
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
      });

      //Toast function for successful sign up alert
      const Toast2 = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        background: "green",
        padding: "1px 5px",
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
      });
      try {
        this.spinner = true;
        let response = await api.register(this.signup);

        // const user = response.data.user;
        // const token = response.data.token;
        // localStorage.setItem("user", JSON.stringify(user));
        // localStorage.setItem("jwt", JSON.stringify(token));

        //Trigger toast alert for successful sign up
        Toast2.fire({
          icon: "success",
          iconColor: "green",
          title: `<small>Welcome ${response.data.user.name}</small>`,
          background: "#fff",
        });

        console.log(response);
        this.$router.push("/userProfile");
      } catch (error) {
        this.spinner = false;
        let errorMsg = error.response.data.errors;
        console.log(errorMsg.email);
        console.log(errorMsg.password);

        //triggering the sweetAlert
        Toast.fire({
          icon: "error",
          title: `<small>${errorMsg.email}</small>`,
          background: "#c5c5c5",
        });
        if (errorMsg.password) {
          Toast.fire({
            icon: "error",
            title: `<small>${errorMsg.password}</small>`,
            background: "#c5c5c5",
          });
        }
      }
    },
  },
};
</script>

<style scoped>
.fa {
  cursor: pointer;
}
.loginContainer {
  min-height: 100vh;
  background: linear-gradient(rgba(97, 68, 68, 0.7), rgba(0, 0, 0, 1));
  text-align: start;
}
.loginWrap {
  position: relative;
  max-width: 850px;
  width: 100%;
  background-color: #fff;
  padding: 40px 30px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  perspective: 2700px;
  border-radius: 10px;
}
.inputBox {
  margin: 1rem 0 !important;
}
.error {
  width: max-content;
  padding: 0.4rem 1rem;
  position: fixed;
  top: 1rem;
  right: 6rem;
  background-color: rgb(211, 143, 143);
  color: #fff;
}
.loginWrap .cover {
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  width: 50%;
  z-index: 98;
  transition: all 1s ease;
  transform-style: preserve-3d;
  transform-origin: left;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.loginWrap .cover::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background: #007e33;
  opacity: 0.5;
  z-index: 100;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.loginWrap .cover::after {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background: #007e33;
  opacity: 0.5;
  z-index: 100;
  transform: rotateY(180deg);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.loginWrap .cover img {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: 12;
  backface-visibility: hidden;
}
.loginWrap .cover .back .backImg {
  transform: rotateY(180deg);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.loginWrap .cover .front .backImg {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.loginWrap #flip:checked ~ .cover {
  transform: rotateY(-180deg);
}
.loginWrap .cover .text {
  position: absolute;
  z-index: 111;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loginWrap .text .text1,
.loginWrap .text .text2 {
  font-size: 26px;
  font-weight: 600;
  color: #fff;
  text-align: center;
  backface-visibility: hidden;
}
.loginWrap .back .text .text1,
.loginWrap .back .text .text2 {
  transform: rotateY(180deg);
}
.loginWrap .text .text2 {
  font-size: 15px;
  font-weight: 500;
}
.loginWrap form {
  height: 100%;
  width: 100%;
  background: #fff;
}
.login {
  background-color: #007e33;
  border: none;
  outline: none;
  color: #fff;
  padding: 0.6rem;
  width: 100%;
  margin: 0px auto;
}
.login:hover {
  opacity: 0.95;
}
.spinner-border {
  width: 1rem;
  height: 1rem;
}
.loginWrap .formContent {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.formContent .loginForm,
.formContent .signUpForm {
  width: calc(100% / 2 - 25px);
}
form .formContent .title {
  position: relative;
  font-size: 25px;
  font-weight: 500;
  color: #333;
}
form .formContent .title:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 25px;
  background: #007e33;
}
form .signUpForm .formContent .title:before {
  width: 20px;
}
form .formContent .inputBoxes {
  margin-top: 30px;
}
form .formContent .inputBox {
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  margin: 10px 0;
  position: relative;
}
.formContent .inputBox input {
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  padding: 0 30px;
  font-size: 17px;
  font-weight: 500;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}
.formContent .inputBox input:focus,
.formContent .inputBox input:valid {
  border-color: #007e33;
}
.formContent .inputBox i {
  position: absolute;
  color: #007e33;
  font-size: 16px;
}
form .formContent .text {
  font-size: 12px;
  font-weight: 500;
  color: #333;
  position: absolute;
  bottom: 1rem;
}
form .formContent .text a {
  text-decoration: none;
}
form .formContent .text a:hover {
  text-decoration: underline;
}
form .formContent .button {
  color: #fff !important;
  margin-top: 40px;
}
form .formContent .button input {
  color: #fff;
  background: #007e33 !important;
  border-radius: 6px;
  padding: 0;
  cursor: pointer;
  transition: 0.4s ease;
}
.formContent .inputBox .input {
  color: #fff;
  background: #007e33 !important;
  border-radius: 6px;
  padding: 10px 40px;
  cursor: pointer;
  transition: 0.4s ease;
  width: 100%;
  text-align: center;
  text-decoration: none;
}
form .formContent .button input:hover {
  background: #006d33dc !important;
}
form .formContent label {
  color: #006d33dc;
  cursor: pointer;
}
form .formContent label:hover {
  text-decoration: underline;
}
form .formContent .loginText,
form .formContent .signUpForm {
  margin-top: 25px;
}
.loginWrap #flip {
  display: none;
}
@media (max-width: 768px) {
  .px-5 {
    padding: 30px 10px !important;
  }
  .loginWrap .cover {
    display: none;
  }
  .formContent .loginForm,
  .formContent .signUpForm {
    width: 100%;
  }
  form .formContent .inputBox[data-v-1102e7b0] {
    margin-bottom: 2rem !important;
  }
  .formContent .signUpForm {
    display: none;
  }
  .loginWrap #flip:checked ~ form .signUpForm {
    display: block;
  }
  .loginWrap #flip:checked ~ form .loginForm {
    display: none;
  }
  .loginWrap[data-v-1102e7b0] {
    background-color: transparent;
  }
  .loginWrap form[data-v-1102e7b0] {
    background-color: transparent;
  }
  form .formContent .title[data-v-1102e7b0] {
    width: max-content;
    margin: 0px auto;
  }
  .formContent .inputBox i[data-v-1102e7b0] {
    margin-left: 0.6rem;

    font-size: small;
  }
  .error {
    right: 0rem;
    left: 06rem;
  }
}
</style>