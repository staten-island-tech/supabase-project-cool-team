<template>
  <div>
    <h1 ref="heading" class="px-100">Books</h1>

    <form @submit.prevent="getData">
      <input v-model="searchQuery" placeholder="Search books..." />
      <button type="submit">Search</button>
    </form>

    <div>
      <div v-for="(book, index) in books" :key="index" :ref="(el) => (bookItems[index] = el)">
        <BookItem :book="book" :add-to-watchlist="addToWatchlist" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import BookItem from '../components/BookItem.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const books = ref([])
const searchQuery = ref('')

const heading = ref(null)
const bookItems = ref([])

async function getData() {
  try {
    const query = searchQuery.value || 'fiction'
    const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`)

    if (!res.ok) throw new Error('Failed to fetch data')
    const data = await res.json()
    books.value = data.docs

    await nextTick()

    gsap.from(bookItems.value, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power1.out',
    })

    bookItems.value.forEach((item, i) => {
      gsap.fromTo(
        item,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          delay: i * 0.1,
        },
      )
    })
  } catch (error) {
    console.error(error)
    alert('Failed to fetch data')
  }
}

onMounted(async () => {
  await getData()

  gsap.to(heading.value, {
    y: () => window.innerHeight * 0.2,
    ease: 'none',
    scrollTrigger: {
      trigger: heading.value,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  })

  gsap.from(heading.value, {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
  })
})

const addToWatchlist = (book) => {
  if (!watchlist.value.some((b) => b.key === book.key)) {
    watchlist.value.push(book)
    console.log('Added to watchlist:', book.title)
  }
}
</script>

<style scoped>
form {
  margin: 1rem 0;
}
input {
  padding: 0.5rem;
  width: 250px;
}
button {
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
}
</style>
