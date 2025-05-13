import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '../stores/authStore'
import LogIn from '../views/LogIn.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/watchlist',
      name: 'watchlist',
      component: () => import('../views/ReadListView.vue'),
      meta: { requiresAuth: true }, 
    },
    {
      path: '/LogIn',
      name: 'LogIn',
      component: LogIn
    },
  ],
})


router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth) {
    
    if (!authStore.isLoggedIn) {
      next({ name: 'home' }) 
    } else {
      next() 
    }
  } else {
    next() 
  }
})

export default router
