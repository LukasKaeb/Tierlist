<template>
  <div class="backdrop">
    <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/tierlist">Create Tierlist</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
    <button class="sign-out w-32 " @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
  </nav>
  </div>
  <router-view/>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter()

const isLoggedIn = ref(false)

let auth;
onMounted(()=>{
  auth = getAuth()
  onAuthStateChanged(auth, (user) =>{
    if(user){
      isLoggedIn.value = true
    } else{
      isLoggedIn.value = false
    }
  })
})

const handleSignOut = () =>{
  signOut(auth).then(()=>{
    router.push("/")
  })
}
</script>

<style>
.sign-out{
  text-decoration: underline;
  background: none;
  color: #ac44f6;
  height: 25px;
  width: 25pxpx;
  padding: 5px 10px;
}

.backdrop{
  backdrop-filter: blur();
  border-radius: 50px;
  margin: auto;
  width: 800px;
  background: transparent;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  padding-right: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: white;
  background: #333;
  border-radius: 5px;
  padding: 2px 4px;
}
</style>


