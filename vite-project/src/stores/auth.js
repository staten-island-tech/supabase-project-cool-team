{/* <script setup>
import { useAuthStore } from '../stores/authStore'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const loading = ref(false)
const router = useRouter()

onMounted (()=> {
    router.beforeEach((to, from, next) => {
        loading.value = true
        next()
    })
})
</script> */}