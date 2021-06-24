<template>
    <div>
     <footer class="px-md-5 pt-2">
        <div class="terms text-left">
          <span class="me-5"><a href="#" class="text-light">Terms of service</a></span>
          <span><a href="#" class="text-light">Privacy policy</a></span>
        </div>
        <div class="copyright mt-4">
            <p>copyright&copy;2021 myOrigin</p>
        </div>
    </footer>
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
footer{
  height: max-content;
  background-color: grey;
}

.terms a:hover{
  text-decoration: underline;
}

.copyright{
  display: flex;
  align-items: center;
  justify-content: center;
  color: lightgrey;
}

@media screen and (max-width:556px) {
footer{
  padding-left: 2rem;
}
}
</style>