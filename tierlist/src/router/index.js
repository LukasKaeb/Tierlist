import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tierlist from '@/views/Tierlist.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { reject, resolve } from 'core-js/features/promise'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tierlist',
    name: 'tierlist',
    component: Tierlist,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const getCurrentUser = () =>{
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next)=>{
  if(to.matched.some((record)=> record.meta.requiresAuth)) {
    if (await getCurrentUser()){
      next()
    } else{
      alert("You dont have access! Please Login or Register first.")
      next("/")
    }

  }else{
    next()
  }
})

export default router
