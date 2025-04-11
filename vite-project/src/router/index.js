import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '../stores/authStore'



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
      component: () => import('../views/WatchlistView.vue'),
      meta: { isLoggedIn: true }, // This route requires authentication
    },
  ],
})
// On successful login:

// Global navigation guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  // Check if the route requires authentication
  if (to.meta.requiresAuth) {
    // If not logged in, redirect to home or login page
    if (!authStore.isLoggedIn) {
      next({ name: 'home' }) // Redirect to home or login page
    } else {
      next() // Allow navigation to the watchlist
    }
  } else {
    next() // If the route doesn't require auth, allow navigation
  }
})

export default router
