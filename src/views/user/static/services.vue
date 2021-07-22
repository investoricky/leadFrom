<template>
<div class="services-container" id="services">
  <h1 class="services">Services</h1>
  <div class="d-md-flex d-sm-block align-items-center justify-content-center service-content px-3 pt-4 pb-2">
    <div class="certificate-container text-center px-3 py-3 mx-2 mb-2">
      <h3>Certificate of Origin</h3>
      <p class="text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Molestiae distinctio 
        impedit corrupti autem culpa. <br> Eveniet vero quae eius nulla, quaerat ab. Ad alias 
        quaerat, <br> tenetur praesentium molestiae eos consequuntur iure?
      </p>
    </div>
    <div class="tax-container text-center px-3 py-3 mx-2 mb-2">
      <h3>Tax Payment</h3>
      <p class="text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Molestiae distinctio 
        impedit corrupti autem culpa. <br> Eveniet vero quae eius nulla, quaerat ab. Ad alias 
        quaerat, <br> tenetur praesentium molestiae eos consequuntur iure?
      </p>
    </div>
  </div>
  <div class="d-md-flex d-sm-block align-items-center justify-content-center px-3 pb-2">
    <div class="certificate-container text-center px-3 py-3 mx-2 mb-2">
      <h3>Obtaining of Birth Certificate</h3>
      <p class="text-muted text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Molestiae distinctio 
        impedit corrupti autem culpa. <br> Eveniet vero quae eius nulla, quaerat ab. Ad alias 
        quaerat, <br> tenetur praesentium molestiae eos consequuntur iure?
      </p>
    </div>
  </div>
</div>
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
.services-container {
  background: #F1F8E9;
  min-height: 50vh;
}
.services{
  font-weight: 500;
  color: #1E880D;
  border-bottom: 3px solid #1E880D;
  width: fit-content;
  text-align: center;
  margin: 0 auto;
}
.certificate-container,
.tax-container {
  background: #EEEDEB;
  height: max-content;
  border-radius: 10px;
  /* box-shadow: 0 0px 5px rgba(51, 51, 51, 0.282); */
}
@media screen and (max-width: 768px){
.service-content {
  padding: 20px 7px !important;
}
p{
  font-size: 17px;
}
}
</style>