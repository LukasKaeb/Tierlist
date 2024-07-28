<template>
  <div class="home">
    <h1>Create your own Tierlist</h1>
    <p>Please login or register to create a Tierlist</p>
  </div>
  <button @click="redirect" class="login-button">Login</button>
  <div>
    <img src="https://tiermaker.com/images/uploads/blobid1668114516863.png" alt="image">
  </div>
  
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const redirect = () => {
  router.push("/login")
}


</script>

<style>
img{
  width: 600px;
  margin: 50px auto;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
.login-button{
  display: inline-block;
  width: 80px;
  height: 40px;
  background: transparent;
  border-radius: 5px;
  cursor: pointer;
}
</style>
