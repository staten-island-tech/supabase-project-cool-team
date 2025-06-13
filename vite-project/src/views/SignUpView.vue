<template>
  <div>
    <h1 class="text-4xl font-bold text-center mb-4 mt-4">Sign Up</h1>
    <form @submit.prevent="handleSignUp">
      <div class="text-center text-2xl">
        <label for="email">Email:</label>
        <input
          type="email"
          v-model="email"
          id="email"
          required
          class="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div class="text-center text-2xl">
        <label for="password">Password:</label>
        <input
          type="password"
          v-model="password"
          id="password"
          required
          class="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div class="flex justify-center">
        <button
          type="submit"
          :disabled="isLoading"
          class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-blue-300"
        >
          {{ isLoading ? 'Signing up...' : 'SIGN UP' }}
        </button>
      </div>
      <div v-if="errorMessage" class="text-red-500 text-center mt-4 text-lg">
        {{ errorMessage }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../stores/supabase'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const isLoading = ref(false)
const router = useRouter()

const handleSignUp = async () => {
  errorMessage.value = ''
  isLoading.value = true

  try {
    const { error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    })

    if (error) {
      errorMessage.value = error.message
    } else {
      alert('Sign up successful!')
      router.push('/login')
    }
  } catch (error) {
    errorMessage.value = 'Something went wrong. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>
