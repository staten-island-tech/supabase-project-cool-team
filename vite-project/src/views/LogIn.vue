<template>
  <div>
    <h1 class="text-4xl font-bold text-center mb-4 mt-4" >Login</h1>
    <form @submit.prevent="handleLogin">
      <div class="text-center text-2xl">
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" required />
      </div>
      <div class="text-center text-2xl">
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <div class="flex justify-center" >
        <button type="submit" class="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-2 px-6 rounded-lg transition duration-200">SUBMIT</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const authStore = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')

const handleLogin = async () => {
  try {
    authStore.logIn()
    alert('Login successful!')
    router.push('/home')
  } catch (error) {
    alert('Login failed: ' + error.message)
  }
}
</script>