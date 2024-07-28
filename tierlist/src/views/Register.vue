<template>
<div class="register-form">
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email"></p>
    <p><input type="password" placeholder="Password" v-model="password"></p>
    <p class="register"><button @click="register">Register</button></p>
    <p class="google"><button @click="signInWithGoogle">Sign In With Google</button></p>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'vue-router'; //import router

const email = ref('')
const password = ref('')
const router = useRouter() // get a reference to our vue router

const register = () => {
    //need .value because ref()
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data)=> {
        console.log("Successfully registered!")
        router.push('/tierlist')
    })
    .catch((error)=>{
        console.log(error.code)
        alert(error.message)
    })
}
const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(getAuth(), provider)
    .then((result) => {
        console.log(result.user)
        router.push("/tierlist")
    })
    .catch((error) => {
        //handle error
    })
}


</script>

<style>


button{
    height: 50px;
    width: 125px;
    padding: 5px 10px;
    border: none;
    border-radius: 50px;
    background: #ac44f6;
}
::placeholder{
    color: black;
}
input{
    width: 250px;
    padding: 25px 10px;
    background: transparent;
    color: black;
    border: none;
    border-bottom: 2px solid black;
    

}
.register-form{
    border: none;
    padding: 25px 5px;
    border-radius: 50px;
    margin: 50px auto;
    width: 500px;
    backdrop-filter: blur();
    background: transparent;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
</style>