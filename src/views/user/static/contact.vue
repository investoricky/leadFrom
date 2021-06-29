<template>
    <div>
        <section class="contact-section" id="contact">
            <div class="contact-header">
              <h1 class="contact__heading">Contact</h1>
              <p class="contact__subheading">
                Feel Free To contact us anytime.<br/> We will get back to you as soon
                as we can
              </p>
            </div>
            
              <div class="form__area">
                <form action="" class="contact-form">
                  <div class="form__name">
                    <div class="form__sub">
                      <label for="firstname">First Name <span class="text-danger">*</span></label>
                      <input
                        id="firstname"
                        name="firstname"
                        type="text"
                        class="message1"
                        required
                      />
                    </div>

                    <div class="form__sub">
                      <label for="lastname">Last Name <span class="text-danger">*</span></label>
                      <input
                        id="lastname"
                        name="lastname"
                        type="text"
                        class="message1"
                        required
                      />
                    </div>
                  </div>

                  <div class="form__sub">
                    <label for="email">EMAIL <span class="text-danger">*</span> </label>
                    <input
                      id="email"
                      name="email"
                      type="text"
                      class="message1"
                      required
                    />
                  </div>

                  <div class="form__sub">
                    <label for="message">Message <span class="text-danger">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      type="text"
                      required
                      class="message"
                    >
                    </textarea>
                  </div>
                  <button class="btn__form">Send Message</button>
                  </form>
                </div>
        </section>
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
.contact-section{
  background: rgb(235, 233, 233);
  padding-bottom: 50px; 
}

.contact-header{
  padding: 2rem;
  padding-top: 4rem;
  color: white;
  height: 400px;
  background: linear-gradient(rgba(9, 95, 55, 0.8), rgba(9, 95, 55, 0.8)),
    url("../images/landmark.jpg") no-repeat center center/cover;
}

.contact__heading {
  margin-bottom: 1.5rem;
  letter-spacing: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.contact__heading::after {
  display: block;
  content: "";
  width: 4rem;
  height: 0.2rem;
  background-color: rgba(255, 255, 255, 0.808);
  margin-top: 1rem;
}

.contact__subheading {
  font-size: 1.2rem;
  text-align: center;
}


/* Form  */
.contact-form {
  width: 50vw;
  margin: auto;
  margin-top: -150px;
  padding: 3rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 500;
  background-color: #fff;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.336);
  color: rgba(0, 0, 0, 0.6);
  z-index: 2;
}

.form__name {
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 1.5rem;
}

.form__sub {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
  text-align: left;
}

.message1 {
  height: 2.3rem;
  margin-bottom: 1.2rem;
  background-color: rgb(224, 221, 221);
  border: none;
  border-radius: 4px;
  padding: 0 1rem;
}

.message {
  height: 6.5rem;
  margin-bottom: 1.2rem;
  background-color: rgb(224, 221, 221);
  border: none;
  border-radius: 4px;
  padding: 0 1rem;
}

.message1:active, .message1:focus, .message:active, .message:focus{
  border: 1px solid grey;
  outline: none;
  background-color: rgb(224, 221, 221);
}


.btn__form {
  outline: none;
  display: block;
  background: #007e33;
  color: white;
  border: none;
  padding: 0.6rem;
  margin: 1rem auto;
  text-decoration: none;
  font-family: "Ubuntu", sans-serif;
  font-size: 1.5rem;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  text-align: center;
}

.btn__form:hover, .btn__form:focus{
  background-color: #1c924b;
  color: white;
}

@media screen and (max-width: 1200px) {
.contact-form{
  width: 70vw;
  padding: 1.5rem;
}
}

@media screen and (max-width: 992px) {
.contact-form{
  width: 80vw;
  padding: 1.5rem;
}

.form__name {
  display: flex;
  flex-direction: column;
}
}

@media screen and (max-width: 556px){
.contact-header{
  height: 400px;
  padding-left: 1rem;
  padding-right: 1rem;
}

.contact__subheading{
  font-size: 1rem;
}

label{
  font-size: 1rem;
}

.contact-form{
  width: 90vw;
  padding: 1.5rem;
}

.btn__form{
  padding: 0.5rem;
}


.form__name {
  display: flex;
  flex-direction: column;
}
}

</style>