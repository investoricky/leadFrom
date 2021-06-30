<template>
    
    <section class="px-md-5 header-section" id="home">
          <div class="container">
              <div class="pe-lg-5 text-left slideInLeft">
                <h2 class="mb-4 fw-bold">Get Your<br> <span class="important">Certificate Of Origin</span></h2>
                
                <p class="smaller">
                    Have you ever had difficulties getting your certificate of origin from your Local Government?
                    We are here to take that load off your chest. With my<span class="origin">Origin</span>, you can get yours right at the comfort of your home.
                  </p>
                  <div>
                    <router-link to="/userProfile"><button class="btn get-btn" type="button">Get Certificate</button></router-link>
                  </div>
              </div>
              <div class="d-flex align-items-center justify-content-center my-5 my-lg-0 img">
                  <img src="../images/Free-Girl-Scout-Certificate-of-Appreciation-Template.jpeg" alt="" class="cert">
              </div>
          </div>
    </section>
    
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.header-section{
  height: 100vh;
  width: 100%;
  background: linear-gradient(rgba(97, 68, 68, 0.7), rgba(0, 0, 0, 1)),
  url("../images/david-rotimi-LxENUKJXh_k-unsplash.jpg") no-repeat center center/cover;
  color: white;
  display: flex;
  align-items: center;
  padding-top: 50px;
}

.header-section .container{
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: center;
    align-items: center;
}

h2{
    font-size: 2.3rem;
    color: #007E33;
}
.origin {
  color: #007e33;
}
.important{
    color: yellowgreen;
    font-weight: bolder;
}

.smaller{
    font-size: 1rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.8);
}

.btn{
    font-weight: 600;
    font-family: "Ubuntu", sans-serif;
}

.get-btn{
  background-color: #007e33;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.6rem 1.5rem;
  margin-top: 1.5rem;
} 

.get-btn:hover{
  background-color: #1c924b;
  color: white;
}

.cert{
  width: 100%;
  height: 65%;
  border-radius: 0.5rem;
}
.slideInLeft {
  -webkit-animation-name: slideInLeft;
  animation-name: slideInLeft;
  -webkit-animation-duration: 5s;
  animation-duration: 5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  }
  @-webkit-keyframes slideInLeft {
  0% {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  visibility: visible;
  }
  100% {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  }
  }
  @keyframes slideInLeft {
  0% {
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  visibility: visible;
  }
  100% {
  -webkit-transform: translateX(0);
  transform: translateX(0);
  }
  }

@media screen and (max-width: 992px) {
  .header-section{
  height: max-content;
  }

   .header-section .container{
    height: 90%;
    width: 95vw;
    grid-template-columns: auto;
    padding-top: 50px;
}
}

@media screen and (max-width: 556px){
    .cert{
      display: none;
    }

  h2{
  font-size: 1.85rem;
  line-height: 2.4rem;
}
}
</style>