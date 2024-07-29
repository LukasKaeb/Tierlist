import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { initializeApp } from "firebase/app";

import "/src/assets/global.css"


const firebaseConfig = {
    apiKey: "AIzaSyDjsMysbcywQcTPDX3f1xWNV7p-fM6K5Sk",
    authDomain: "tierlist-maker-a088a.firebaseapp.com",
    projectId: "tierlist-maker-a088a",
    storageBucket: "tierlist-maker-a088a.appspot.com",
    messagingSenderId: "462352111982",
    appId: "1:462352111982:web:657d8afd7c6b943782897f"
  };

initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')