<template>
  <div>
    <div class="px-5 text-center">
      <button
        type="button"
        class="btn btn-success btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#requestModal"
      >
        <small>Get Certificate</small>
      </button>

      <!-- MODAL DECLARATION -->
      <div
        class="modal fade"
        id="requestModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="reuestModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <!-- MODAL HEADING -->
              <div class="modal-title">APPLICATION PROCESS</div>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-bs-label="close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <!-- MODAL BODY -->
            <div class="modal-body">
              <!-- FORM -->
              <form
                action="#"
                id="requestFormOne"
                role="form"
                data-toggle="validator"
                method="POST"
                accept-charset="utf-8"
                @submit="submitForm"
              >
                <!-- STEP-WIZARD -->
                <div id="stepwizard">
                  <!-- NAV-PROGRESS LINKS -->
                  <ul class="nav">
                    <li class="nav-item">
                      <a class="nav-link" href="#form-step-1">
                        Personal Info
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#form-step-2"> Verification </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#form-step-3">
                        Certificate Preview
                      </a>
                    </li>
                  </ul>

                  <div class="tab-content">
                    <div
                      id="form-step-1"
                      class="tab-pane"
                      role="tabpanel"
                      aria-labelledby="form-step-1"
                    >
                      <!-- FORM FIRST STEP-PAGE -->
                      <div
                        class="form-step-0"
                        role="form"
                        data-toggle="validator"
                      >
                        <div class="row px-md-1">
                          <div class="col-md-5">
                            <div class="form-group text-left my-5">
                              <label for="firstName" class="text-left"
                                >First Name</label
                              >
                              <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                class="form-control"
                                required
                                placeholder=""
                                v-model="personalInfo.firstName"
                              />
                              <div
                                class="help-block with-errors text-left"
                              ></div>
                            </div>
                            <div class="form-group text-left my-5">
                              <label for="lastName" class="text-left"
                                >Last Name</label
                              >
                              <input
                                type="text"
                                name="lastNname"
                                id="lastName"
                                class="form-control"
                                required
                                placeholder=""
                                v-model="personalInfo.lastName"
                              />
                              <div
                                class="help-block with-errors text-left"
                              ></div>
                            </div>

                            <div class="form-group text-left my-5">
                              <label for="otherNames" class="text-left"
                                >Other Names</label
                              >
                              <input
                                type="text"
                                name="otherNames"
                                id="otherNames"
                                class="form-control"
                                required
                                placeholder=""
                                v-model="personalInfo.otherNames"
                              />
                              <div
                                class="help-block with-errors text-left"
                              ></div>
                            </div>
                            <div class="form-group text-left my-5">
                              <label for="gender" class="text-left"
                                >Gender</label
                              >

                              <select
                                class="custom-select mr-sm-2"
                                id="gender"
                                v-model="personalInfo.gender"
                              >
                                <option selected>Choose...</option>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Others</option>
                              </select>

                              <div
                                class="help-block with-errors text-left"
                              ></div>
                            </div>
                          </div>
                          <div class="col-md-5 offset-md-2 my-5">
                            <div class="form-group text-left">
                              <label for="dob" class="text-left"
                                >Date Of Birth</label
                              >
                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <div class="input-group-text" id="emailAddon">
                                    @
                                  </div>
                                </div>
                                <input
                                  type="date"
                                  name="dob"
                                  id="dob"
                                  class="form-control"
                                  required
                                  placeholder=""
                                  v-model="personalInfo.dob"
                                />
                              </div>
                              <div
                                class="help-block with-errors text-left"
                              ></div>
                            </div>

                            <div class="form-group text-left my-5">
                              <label for="email" class="text-left"
                                >E-Mail</label
                              >
                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <div class="input-group-text" id="emailAddon">
                                    @
                                  </div>
                                </div>
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  class="form-control"
                                  required
                                  placeholder=""
                                  v-model="personalInfo.email"
                                />
                              </div>
                              <div
                                class="help-block with-errors text-left"
                              ></div>
                            </div>
                            <div class="form-group text-left my-5">
                              <label for="country" class="text-left"
                                >Country</label
                              >
                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <div
                                    class="input-group-text"
                                    id="countryAddon"
                                  >
                                    <img
                                      :src="countryFlag"
                                      alt=""
                                      class="country-flag"
                                      v-if="showFlag"
                                      id="country"
                                    />
                                  </div>
                                </div>
                                <select
                                  class="custom-select mr-sm-2"
                                  id="countrySelect"
                                  v-model="personalInfo.country"
                                >
                                  <option selected>Choose...</option>
                                  <option value="1">Nigeria</option>
                                  <option value="2">USA</option>
                                  <option value="3">United Kingdom</option>
                                </select>
                              </div>
                              <div
                                class="help-block with-errors text-left"
                              ></div>
                            </div>

                            <div class="form-group text-left">
                              <label for="phone" class="text-left"
                                >Phone Number</label
                              >
                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <div
                                    class="input-group-text"
                                    id="countryAddon"
                                  >
                                    {{ callCode }}
                                  </div>
                                </div>
                                <input
                                  type="phone"
                                  name="phone"
                                  id="phone"
                                  class="form-control"
                                  required
                                  placeholder=""
                                  v-model="personalInfo.phoneNumber"
                                />
                              </div>

                              <div
                                class="help-block with-errors text-left"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Step One Wizard Ends Here -->

                    <!-- //Step Two WIzard Starts here -->
                    <div
                      id="form-step-2"
                      class="tab-pane"
                      role="tabpanel"
                      aria-labelledby="form-step-2"
                    >
                      <!-- <h5 class="text-left">Please Input your Pesonal Data</h5> -->
                      <div
                        class="form-step-1"
                        role="form"
                        data-toggle="validator"
                      >
                        <div class="row px-md-1">
                          <div class="col-md-5 mt-5">
                            <div class="form-group text-left">
                              <label for="stateOrigin" class="text-left"
                                >State Of Origin</label
                              >
                              <select
                                class="custom-select mr-sm-2"
                                id="stateOrigin"
                                v-model="certDetails.state"
                              >
                                <option selected>Akwa Ibom</option>
                              </select>

                              <div
                                class="help-block with-errors text-left"
                              ></div>
                            </div>
                            <div class="form-group text-left my-5">
                              <label for="family" class="text-left"
                                >Family Name</label
                              >
                              <input
                                type="text"
                                name="family"
                                id="family"
                                class="form-control"
                                required
                                placeholder=""
                                v-model="certDetails.familyName"
                              />
                              <div
                                class="help-block with-errors text-left"
                              ></div>
                            </div>
                          </div>
                          <div class="col-md-5 offset-md-2 mt-5">
                            <div class="form-group text-left my-0">
                              <label for="lga" class="text-left">LGA</label>
                              <select
                                class="custom-select mr-sm-2"
                                id="lga"
                                v-model="certDetails.lga"
                              >
                                <option
                                  v-for="lga in akwaIbomLgas"
                                  :key="lga.id"
                                >
                                  {{ lga }}
                                </option>
                              </select>

                              <div
                                class="help-block with-errors text-left"
                              ></div>
                            </div>

                            <div class="form-group text-left my-5">
                              <label for="clan" class="text-left"
                                >Clan Name</label
                              >

                              <input
                                type="text"
                                name="clan"
                                id="clan"
                                class="form-control"
                                required
                                placeholder=""
                                v-model="certDetails.clan"
                              />

                              <div
                                class="help-block with-errors text-left"
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group text-left my-0">
                              <label for="nin" class="text-left">NIN</label>

                              <input
                                type="credit-card"
                                name="nin"
                                id="nin"
                                class="form-control"
                                required
                                placeholder=""
                                v-model="certDetails.nin"
                              />

                              <div
                                class="help-block with-errors text-left"
                              ></div>
                            </div>
                          </div>

                          <div class="col">
                            <div class="form-group text-left my-0">
                              <label for="picture" class="text-left"
                                >Upload Image</label
                              >

                              <input
                                type="file"
                                name="picture"
                                id="picture"
                                class="form-control"
                                required
                                @change="previewImage"
                                accept="image/*"
                              />

                              <div
                                class="help-block with-errors text-left"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- //Step Two WIzard ends here -->

                    <!-- //Step Three WIzard starts here -->
                    <div
                      id="form-step-3"
                      class="tab-pane"
                      role="tabpanel"
                      aria-labelledby="form-step-3"
                    >
                      <div
                        class="form-step-2"
                        role="form"
                        data-toggle="validator"
                      >
                        <!-- IMAGE TEMPLATE FOR PREVIEW -->
                        <div class="certificatePreview border">
                          <div
                            class="image-preview"
                            v-if="imageData.length > 0"
                          >
                            <!-- <img :src="imageData" alt="" /> -->
                          </div>
                          <div class="preview">
                            <img src="@/assets/images/cert2.png" alt="" />
                            <div class="info">
                              <!-- WARNING MESSAGE -->
                              <p>
                                Please review vital information displayed on
                                this sample Certificate and make any changes
                                necessary
                              </p>
                              <p>
                                By clicking Next the details on this page cannot
                                be edited and you will be liable to future costs
                              </p>
                              <p>
                                This Certificate is not the Original copy. It is
                                only a Template
                              </p>
                            </div>
                          </div>

                          <!-- CERTIFICATE PREVIEW DETAILS -->
                          <div class="userDataDetails">
                            <h6 class="certify">This is to certify that</h6>
                            <p>
                              <strong
                                class="text-uppercase"
                                style="text-decoration: underline"
                                >{{ personalInfo.firstName }}
                                {{ personalInfo.lastName }}
                                {{ personalInfo.otherNames }}</strong
                              >
                              Of
                            </p>
                            <p>
                              <span>
                                <strong
                                  style="
                                    text-decoration: underline;
                                    text-transform: uppercase;
                                  "
                                  >{{ certDetails.familyName }}
                                  {{ certDetails.clan }}
                                </strong>
                                Village
                              </span>
                            </p>

                            <p>
                              in
                              <strong
                                style="
                                  text-decoration: underline;
                                  text-transform: uppercase;
                                "
                                >{{ certDetails.lga }}</strong
                              >
                              LOCAL GIVERNMENT AREA
                            </p>
                            <p class="pr-4">
                              is an indegene of
                              <span
                                style="
                                  text-transform: uppercase;
                                  font-weight: bold;
                                "
                                >AKWA IBOM STATE of NIGERIA.</span
                              >
                              Please accord him/her all right and priviledges
                              due to any Nigerian Citizen.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- //Step Three WIzard ends here -->
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-secondary"
                type="button"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./flutterWave.js"></script>
<script>
export default {
  data() {
    return {
      countryCode: "CC", //country code
      countryFlag: "", //country flag
      showFlag: false, //hide flag untill country is selected
      callCode: "+000", //default call code shown
      personalInfo: {
        //Personal Info of user
        firstName: "",
        lastName: "",
        otherNames: "",
        gender: "",
        dob: "",
        email: "",
        country: "",
        phoneNumber: "",
        city: "",
      },
      certDetails: {
        //certificate details of users
        state: "",
        familyName: "",
        lga: "",
        clan: "",
        nin: "",
        passport: null,
      },
      akwaIbomLgas: null, //local government in akwa ibom. An array would be fetched and pushed to it
      imageData: "", //binding the user selected image file
    };
  },
  methods: {
    //This function gets value file of user selected image and display it
    previewImage(event) {
      // Reference to the DOM input element
      var input = event.target;
      // Ensure that you have a file before attempting to read it
      if (input.files && input.files[0]) {
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // Define a callback function to run, when FileReader finishes its job
        reader.onload = (e) => {
          // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
          // Read image as base64 and set to imageData
          this.imageData = e.target.result;
        };
        // Start the reader job - read file as a data url (base64 format)
        reader.readAsDataURL(input.files[0]);
      }
    },

    //Get selected country from country Select Options
    getCountrySelected() {
      var selectCountry = document.getElementById("countrySelect");
      selectCountry.addEventListener("change", () => {
        var index = selectCountry.selectedIndex;

        if (index === 1) {
          this.countryCode = "NGN"; //set country code to NGN
          var nigeria = "nigeria";
          this.getCities(nigeria); //Push the country selected as a parameter to get cities in that country...still working on it
          this.getLgaInAkwaIbon();
        } else if (index === 2) {
          this.countryCode = "USA";
          var usa = "united states of america";
          this.getCities(usa);
        } else {
          this.countryCode = "UK";
          var uk = "united kingdom";
          this.getCities(uk);
        }
      });
    },

    //This function gets cities bt recieving the parameters passed from the getCountrySelected
    //function and shows the flags of the selected countries
    async getCities(country) {
      try {
        this.showFlag = true;
        const response = await this.axios.get(
          `https://restcountries.eu/rest/v2/name/${country}`
        );
        this.countryCode = response.data[0].alpha3Code;
        this.countryFlag = response.data[0].flag;
        this.callCode = "+" + response.data[0].callingCodes[0];
      } catch (error) {
        console.log(error);
      }
    },

    //This function gets all local government in Akwa Ibom State
    async getLgaInAkwaIbon() {
      try {
        const response = await this.axios.get(
          "http://locationsng-api.herokuapp.com/api/v1/states/Akwa%20Ibom/lgas"
        );
        this.akwaIbomLgas = response.data;

        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },

    //This Function submits the form and proceeds to the Flutterwave Payment Platform
    submitForm(e) {
      e.preventDefault();
      FlutterwaveCheckout({
        public_key: "FLWPUBK-af7122f74afcd0b75a449e9b27e1c4c4-X",
        tx_ref: "LEADFROM" + Math.floor(Math.random() * 1000000000 + 1),
        amount: 200,
        currency: "NGN",
        customer: {
          email: this.personalInfo.email,
          phonenumber: this.personalInfo.phoneNumber,
          name: this.personalInfo.firstName + " " + this.personalInfo.lastName,
        },
        customizations: {
          title: "Lead From Group",
          description: "One Step away from your certificate!",
        },
        callback: (data) => {
          console.log(data);
        },
      });
    },
  },
  mounted() {
    this.getCountrySelected();
  },
  created() {},
};
</script>


<style scoped>
.tab-content {
  display: block;
  min-height: 530px;
  position: relative;
  margin: 0;
  padding: 0;
  border: 0 solid #ccc;
  overflow-x: hidden;
  overflow-y: scroll;
}
label {
  padding-left: 0.5rem;
}
.tab-content::-webkit-scrollbar {
  width: 0; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
.with-errors {
  color: rgba(255, 0, 0, 0.541);
  font-size: small;
  padding: 0.3rem;
}
.country-flag {
  width: 30px;
  height: 23px;
}
button.btn.sw-btn-prev {
  color: #000 !important;
}
.image-preview {
}
.image-preview img {
  position: absolute;
  width: 100px;
  height: 100px;

  top: 2rem;
  z-index: 999;
  background-color: transparent;
}

@media (max-width: 766px) {
  .form-group.my-5,
  .col-md-5.mt-5 {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
}

@media (max-width: 990px) {
  .image-preview img {
    position: absolute;
    width: 70px;
    height: 70px;
    left: 3rem;
    top: 6rem;
  }
}

@media (max-width: 490px) {
  .image-preview img {
    position: absolute;
    width: 40px;
    height: 40px;
    right: 2rem;
    top: 6rem;
    top: 2rem;
  }
}
</style>