<template>
    <div class="home">
        <div class="firstStepWrap">
            <div class="header"></div>
            <div class="content mt-5 d-flex mx-4">
                <div class="circle">1</div>
                <div class="progress align-self-center">
                    <div class="bar-one"></div>
                </div>
                <div class="circle2">2</div>
                <div class="progress align-self-center">
                    <div class="bar-two"></div>
                </div>
                <div class="circle3">3</div>
            </div>
            <h4 class="h4 mt-5">An E-Pin has been sent to</h4>
            <p><strong>vivian*****@gmail.com</strong></p>
            <form>
                <div class="form-group">
                    <input type="email" class="form-control email" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
            </form>
            <form class="form-inline">
                <router-link to="/thirdStep" type="submit" class="btn text-white mb-2 but">AUTHENTICATE</router-link>
            </form>
            <p class="text-center">Didn't receive pin? <strong>Resend</strong></p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.home {
    min-height: 100vh;
}
.firstStepWrap {  
    width: 40%;
    margin: 40px auto;
    /* background: #f7f5ee; */
    border-radius: 10px;
}
.header{
  background-color: #c9c5c5;
  padding: 1rem;
}
h4 {
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
.circle {
    width: 5rem;
    line-height: 50px;
    border-radius: 50%;
    text-align: center;
    background-color: #3bb972;
    color: #fff;
    display: inline-block;
    position: relative;
  }
  .progress{
    width: 50%;
    margin: 0px auto;
    height: 5px;
    margin: 0px 1rem;
  }

  .bar-one{
    width: 50%;
    background-color: #3bb972;
  }

  .bar-two{
    width: 0%;
    background-color: #3bb972;
  }
  
  .circle2 {
    width: 80px;
    line-height: 50px;
    border-radius: 50%;
    text-align: center;
    font-size: 15px;
    background-color: #c9c5c5; 
    color: #000;
    display: inline-block;
    position: relative;
  }
  .circle3 {
    width: 80px;
    line-height: 50px;
    border-radius: 50%;
    text-align: center;
    font-size: 15px;
    background-color: #c9c5c5; 
    color: #000;
    display: inline-block;
  }
  .email{
      background-color: #c9c5c5;
      width: 100%;
      padding: 1rem 0;
  }
  .but{
      background-color: #3bb972;
      color: #fff;
      border: none;
      font-weight: bolder;
      padding: 1rem 0;
      width: 100%;
    }
    @media only screen and (max-width: 768px) {
    .circle,
    .circle2,
    .circle3{
      width: 12rem;
      height: 2.5rem;
      border-radius: 50%;
      line-height: 40px;
    }
    .firstStepWrap {  
    width: 90%;
    margin: 0px auto;
    
    /* background: #f7f5ee; */
    border-radius: 10px;
}
    .first{
      width: 90%;
      margin: 0px auto;
    }
    .header {
        margin-top: 1rem !important;
    }
  }
</style>