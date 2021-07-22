<template>
  <div class="home">
    <section class="px-md-5 header-section" :style="{backgroundImage:'url(' + require('@/assets/images/' + img + '.jpg') + ')'}" id="home">
      <div class="container">
          <div class="pe-lg-5 text-left slideInLeft">
            <h2 class="mb-4 fw-bold">INTEGRATED LOCAL GOVERNMENT PORTAL</h2>
            
            <p class="smaller text-dark">
                Have you ever had difficulties getting your certificate of origin from your Local Government?
                We are here to take that load off your chest. With the<span class="origin">PLATFROM</span>, you can get yours right at the comfort of your home.
              </p>
              <div class="get-btn-wrap">
                <router-link to="/login"><button class="btn get-btn py-1" type="button">Get Certificate</button></router-link>
              </div>
          </div>
          <div class="d-flex align-items-center justify-content-center my-5 my-lg-0 img">
              <img src="@/assets/animation.gif" alt="" class="cert">
          </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    data(){
        return{
          img: 'david-rotimi-LxENUKJXh_k-unsplash'
        }
    }
}
</script>

<style scoped>
/* .home {
  background: #F1F8E9;
} */
.header-section{
  height: 100vh;
  width: 100%;
  background: no-repeat center center/cover;
  background-blend-mode: overlay;
  background-color: rgba(97, 68, 68, 0.309);
  /* opacity: 1; */
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
    color: #1c924b;
}
.origin {
  color: #1c924b;
}
.important{
    color: #1c924b;
    font-weight: bolder;
}

.smaller{
    font-size: 1rem;
    font-weight: 500;
    color: #79879A;
}

.btn{
    font-weight: 600;
    font-family: "Ubuntu", sans-serif;
}

.get-btn{
  background-color: #1c924b;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.6rem 1.5rem;
  margin-top: 1.5rem;
  /* border-radius: 30px; */
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