<template>
  <div class="home">
    <h1>Create your own Tierlist</h1>
  </div>
  <button @click="redirect" class="login-button">Login</button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const redirect = () => {
  router.push("/login")
}


</script>

<style>
.login-button{
  width: 80px;
  height: 40px;
  background: transparent;
  border-radius: 5px;
  cursor: pointer;
}
</style>
