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
      path: '/Readlist',
      name: 'readlist',
      component: () => import('../views/ReadListView.vue'),
      meta: { isLoggedIn: true },
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

export default router;
