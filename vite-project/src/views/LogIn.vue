<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '@supabase/supabase-js'
import { useAuthStore } from '../stores/authStore'

const authStore = useAuthStore()
const router = useRouter()
const email = ref('')
const password = ref('')


const handleLogin = async () => {
  try {
    await authStore.logIn(email.value, password.value)
    alert('Login successful!')
    router.push('/')
  } catch (error) {
    alert('Login failed: ' + error.message)
  }
}
</script>