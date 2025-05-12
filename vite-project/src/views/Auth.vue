<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Username:</label>
        <input type="text" v-model="username" id="username" required />
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
import { supabase } from '@/supabase'

const authStore = useAuthStore()
const router = useRouter()
const email = ref('')
const password = ref('')

onMounted(() => {
  if (!authStore.isLoggedIn) {
    router.push('/auth')
  }
})

const handleLogin = () => {
  authStore.login(username.value, password.value);
};
</script>