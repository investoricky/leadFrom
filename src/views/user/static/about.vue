<template>
      <section class="about-section px-md-5" id="about">
          <div class="container">
            <div class="img">
              <img src="../images/pexels-arpit-rastogi-4842861.jpg" alt="" class="globe">
            </div>
            <div class="pe-lg-3 text-left">
              <h1 class="about">About</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laboriosam saepe distinctio alias cupiditate explicabo quaerat!
                Ut obcaecati sed asperiores atque maiores ratione animi!
                Laboriosam, illo fugiat vel animi sapiente explicabo?</p>
                <p class="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laboriosam saepe distinctio alias cupiditate explicabo quaerat!
                  Ut obcaecati sed asperiores atque maiores ratione animi!
                  Laboriosam, illo fugiat vel animi sapiente explicabo?</p>
                  <p class="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laboriosam saepe distinctio alias cupiditate explicabo quaerat!
                    Ut obcaecati sed asperiores atque maiores ratione animi!
                    Laboriosam, illo fugiat vel animi sapiente explicabo?</p>
                    <p class="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Laboriosam saepe distinctio alias cupiditate explicabo quaerat!
                    Ut obcaecati sed asperiores atque maiores ratione animi!
                     Laboriosam, illo fugiat vel animi sapiente explicabo?</p>
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
   .about-section{
  background-color: white;
  /* background: linear-gradient(90deg, rgb(99, 179, 99), rgb(0, 100, 0)); */
  color: black;
  height: 100vh;
  padding-top: 80px;
}

.about-section .container{
  display: grid;
  grid-template-columns: 40% 60%;
  grid-column-gap: 3rem;
  padding-right: 2rem;
  font-family: 'Montserrat', sans-serif;
}

.globe{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about{
  letter-spacing: 0.2rem;
}

.about::after {
  display: block;
  content: "";
  width: 4rem;
  height: 0.2rem;
  /* background-color: rgba(0, 0, 0, 0.5); */
  background-color: rgb(99, 179, 99);
  margin-top: 0.8rem;
  margin-bottom: 3rem;
  margin-left: 2rem;
}

@media screen and (max-width: 992px) {
.about-section{
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
}


.about-section .container{
  grid-template-columns: auto;
  grid-column-gap: 0;
  padding-right: 0;
  width: 95vw;
}

.about{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.about::after{
  margin-left: 0;
}

.img{
    display: none;
}
}

@media screen and (max-width: 556px){

}
</style>