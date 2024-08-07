<template>
    <section>
    <div class="form-box">
        <div class="form-value">
            <h2>Sign In To An Account</h2>
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
    <p v-if="errMsg">{{ errMsg }}</p>
    <button @click="register" class="text-white bg-purple-800 mb-4">Submit</button>
    <button @click="signInWithGoogle" class="text-white bg-purple-800">Sign In With Google</button>
    <div class="register">
        <p>Don't have an account?<a href="/register"> Register here.</a></p>
    </div>
        </div>
    </div>
</section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
  import { useRouter } from 'vue-router'; //import router
  
  const email = ref('')
  const password = ref('')
  const errMsg = ref() // ERROR MESSAGE
  const router = useRouter() // get a reference to our vue router
  
  const register = () => {
      //need .value because ref()
      signInWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data)=> {
          console.log("Successfully signed in!")
          router.push('/tierlist')
      })
      .catch((error)=>{
          console.log(error.code)
          switch (error.code) {
            case "auth/invalid-email":
                errMsg.value = "Invalid email!"
                break
            case "auth/user-not-found":
                errMsg.value = "No account with that email was found"
                break
            case "auth/wrong-password":
                errMsg.value = "Incorrect password"
                break
            default:
                errMsg.value = "Email or password was incorrect"
                break
          }
        
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
  /* button{
    cursor: pointer;
  }
  a{
    text-decoration: none;
  } */
  </style>