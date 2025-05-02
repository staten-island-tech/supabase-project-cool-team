<template>
 <div>
    <h1 class="text-center">Reading List</h1>
    <ul>
      <li v-for="book in readlist" :key="book.key">
        <p><strong>Title:</strong> {{ book.title }}</p>
        <p><strong>Author:</strong> {{ book.author_name?.[0] || 'Unknown Author' }}</p>
      </li>
    </ul>
  </div> 
</template>

<script setup>

</script>

<style scoped>

</style>
