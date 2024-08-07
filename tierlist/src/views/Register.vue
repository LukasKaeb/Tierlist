<template>
    <section>
<div class="form-box">
    <div class="form-value">
        <h2>Create an Account</h2>
            <div class="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="text" placeholder="" v-model="email">
                <label for="">Email</label>
            </div>
            <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" placeholder="" v-model="password">
                <label for="">Password</label>
        </div>
            <button @click="register" class="text-white bg-purple-800 mb-4">Register</button>
            <button @click="signInWithGoogle" class="text-white bg-purple-800">Sign In With Google</button>  
    </div>
</div>
</section>
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
/* 

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
.form-box{
    border: none;
    padding: 25px 5px;
    border-radius: 50px;
    margin: 50px auto;
    width: 500px;
    backdrop-filter: blur();
    background: transparent;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
} */
</style>