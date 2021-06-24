<template>
<section class="faq-section" id="faq">
    <h1 class="faq">FAQ</h1>
    <div class="container d-flex flex-column align-items-center justify-content-center">
      <div class="accordion" id="accordionExample">
          <div class="accordion-item">
    <div class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        <h5>Laboriosam saepe distinctio alias</h5>
      </button>
    </div>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p class="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laboriosam saepe distinctio alias cupiditate explicabo quaerat!
            Ut obcaecati sed asperiores atque maiores ratione animi!
           Laboriosam, illo fugiat vel animi sapiente explicabo?</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <h5>Laboriosam saepe distinctio alias</h5>
      </button>
    </div>
    <div id="collapseTwo" class="accordion-collapse collapse"  data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p class="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laboriosam saepe distinctio alias cupiditate explicabo quaerat!
            Ut obcaecati sed asperiores atque maiores ratione animi!
           Laboriosam, illo fugiat vel animi sapiente explicabo?
           Ut obcaecati sed asperiores atque maiores ratione animi!
           Laboriosam, illo fugiat vel animi sapiente explicabo</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <h5>Laboriosam saepe distinctio alias</h5>
      </button>
    </div>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
         <p class="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laboriosam saepe distinctio alias cupiditate explicabo quaerat!
            Ut obcaecati sed asperiores atque maiores ratione animi!
           Laboriosam, illo fugiat vel animi sapiente explicabo?
           Ut obcaecati sed asperiores atque maiores ratione animi!
           Laboriosam, illo fugiat vel animi sapiente explicabo</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        <h5>Laboriosam saepe distinctio alias</h5>
      </button>
    </div>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p class="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laboriosam saepe distinctio alias cupiditate explicabo quaerat!
            Ut obcaecati sed asperiores atque maiores ratione animi!
           Laboriosam, illo fugiat vel animi sapiente explicabo?
           Ut obcaecati sed asperiores atque maiores ratione animi!
           Laboriosam, illo fugiat vel animi sapiente explicabo</p>
      </div>
    </div>
  </div>
   <div class="accordion-item">
    <div class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        <h5>Laboriosam saepe distinctio alias</h5>
      </button>
    </div>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p class="text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laboriosam saepe distinctio alias cupiditate explicabo quaerat!
            Ut obcaecati sed asperiores atque maiores ratione animi!
           Laboriosam, illo fugiat vel animi sapiente explicabo?
           Ut obcaecati sed asperiores atque maiores ratione animi!
           Laboriosam, illo fugiat vel animi sapiente explicabo</p>
      </div>
    </div>
  </div>
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
.faq-section{
  background-color: rgb(235, 233, 233);
  color: black;
  height: max-content;
  padding: 40px 0;
  padding-top: 70px;
}

.faq{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.2rem;
  font-weight: bold;
}

.faq::after {
  display: block;
  content: "";
  width: 4rem;
  height: 0.2rem;
  background-color: rgb(99, 179, 99);
  margin-top: 0.8rem;
  margin-bottom: 3rem;
}
.accordion-item{
  background-color: white;
  width: 70vw;
  margin-bottom: 25px;
  box-shadow: 0 0.5rem 1rem rgba(95, 95, 95, 0.575);
}

.accordion-header button{
   height: 65px; 
}

.accordion-button:not(.collapsed) {
  color: rgb(0, 0, 0);
  background-color: #e7f1ff;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.125);
}

.accordion-button:focus {
  z-index: 3;
  border-color: transparent;
  border-bottom: 1px solid rgb(211, 211, 211);
  /* background-color: rgba(235, 233, 233, 0.35); */
  background-color: rgb(206, 235, 206);
  outline: 0;
  box-shadow: none;
}

.accordion-button:not(.collapsed)::after {
  background-image: none;
  content: url('../images/minus-solid.svg');
  color: green;
  width: 1.1rem;
  transform: rotate(-180deg);
}

.accordion-button::after {
  flex-shrink: 0;
  width: 1.1rem;
  /* height: 1rem; */
  margin-left: auto;
  content: url("../images/plus-solid.svg");;
  background-image: none;
  background-repeat: no-repeat;
  background-size: 1.25rem;
  transition: transform 0.2s ease-in-out;
}

@media screen and (max-width: 992px) {
    .accordion-item{
        width: 80vw;
    }
}

@media screen and (max-width: 556px){
.accordion-item{
  width: 93vw;
  /* height: 70px;
  padding: 0 1.3rem; */
}

h5{
  font-size: 1rem;
  padding-right: 1.3rem;
}
}
</style>