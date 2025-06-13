<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useRouter } from 'vue-router'
import { useAuthStore } from './stores/authStore'
import { supabase } from './stores/supabase'

const router = useRouter()
const authStore = useAuthStore()

async function handleSignOut() {
  const { error } = await supabase.auth.signOut()
  if (error) {
    alert('Error signing out: ' + error.message)
    return
  }
  authStore.logOut()
  router.push('/login')
}
</script>

<template>
  <header>
    <nav>
  <RouterLink to="/home">Home</RouterLink>
  <RouterLink to="/readlist">Reading List</RouterLink>
  
  <template v-if="!authStore.isLoggedIn">
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/signup">Sign Up</RouterLink>
  </template>

  <button v-if="authStore.isLoggedIn" @click="handleSignOut">Sign Out</button>
</nav>
  </header>
  <RouterView />
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
