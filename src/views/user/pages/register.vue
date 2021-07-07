<template>
    <div class="loginContainer d-md-flex d-sm-block justify-content-center align-items-center px-5">
        <div class="loginWrap">
            <input type="checkbox" id="flip">
            <div class="cover">
                <div class="front">
                    <img class="backImg" src="@/assets/lady.jpg" alt="image">
                    <div class="text">
                        <span class="text1">Every new friend is a new adventure</span>
                        <span class="text2">Let's get connected</span>
                    </div>
                </div>
                <div class="back">
                    <img class="backImg" src="@/assets/lady2.jpg" alt="image">
                    <div class="text">
                        <span class="text1">Complete miles of journey with one step</span>
                        <span class="text2">Let's get started</span>
                    </div>
                </div>
            </div>
            <form action="#">
                <div class="formContent">
                    <div class="loginForm">
                        <div class="title">Login</div>
                        <div class="inputBoxes">
                            <div class="inputBox">
                                <i class="fas fa-envelope"></i>
                                <input type="text" placeholder="Enter your email" required>
                            </div>
                            <div class="inputBox">
                                <i class="fas fa-lock"></i>
                                <input type="password" placeholder="Enter your password" required>
                            </div>
                            <div class="text"><a href="#">Forgot password?</a></div>
                            <div class="button inputBox">
                                <router-link class="input" to="/userprofile">submit</router-link>
                                <!-- <input type="submit" value="submit"> -->
                            </div>
                            <div class="text signUpText">Don't have an account? <label for="flip">Sign up now</label></div>
                        </div>
                    </div>

                    <!-- Sign-Up Section -->
                    <div class="signUpForm">
                        <div class="title">Sign Up</div>
                        <div class="inputBoxes">
                            <div class="inputBox">
                                <i class="fas fa-user"></i>
                                <input type="text" placeholder="First name" required>
                            </div>
                            <div class="inputBox">
                                <i class="fas fa-user"></i>
                                <input type="text" placeholder="Last name" required>
                            </div>
                            <div class="inputBox">
                                <i class="fas fa-envelope"></i>
                                <input type="email" placeholder="Enter you email" required>
                            </div>
                            <div class="inputBox">
                                <i class="fas fa-lock"></i>
                                <input type="password" placeholder="Enter your password" required>
                            </div>
                            <div class="inputBox">
                                <i class="fas fa-lock"></i>
                                <input type="password" placeholder="Confirm password" required>
                            </div>
                            <div class="button inputBox">
                                <router-link class="input" to="/userprofile">submit</router-link>
                                <!-- <input type="submit" value="submit"> -->
                            </div>
                            <div class="text loginText">Already have an account? <label for="flip">Login in now</label></div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
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
    content: '';
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
    content: '';
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
    content: '';
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
form .formContent  .button input {
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
form .formContent  .button input:hover {
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
        padding: 50px 10px !important;
    }
    .loginWrap .cover {
        display: none;
    }
    .formContent .loginForm,
    .formContent .signUpForm {
    width: 100%;
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
}
</style>