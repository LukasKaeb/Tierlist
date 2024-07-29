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
  cursor: pointer;
  height: 50px;
  width: 125px;
  padding: 5px 10px;
  border: none;
  border-radius: 50px;
  background: #ac44f6;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}
</style>
