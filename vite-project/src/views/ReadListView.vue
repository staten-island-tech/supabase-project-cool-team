<template>
  <div>
    <input v-model="newTitle" placeholder="Add book title" />
    <button @click="addNewItem">Add</button>

    <ul>
      <li v-for="item in readingListStore.items" :key="item.id">
        {{ item.title }}
        <button @click="removeItem(item.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { useReadingListStore } from '../stores/readlistStore'

const readingListStore = useReadingListStore()
const newTitle = ref('')

function addNewItem() {
  if (newTitle.value.trim() !== '') {
    readingListStore.addItem(newTitle.value.trim())
    newTitle.value = ''
  }
}

function removeItem(id) {
  readingListStore.removeItem(id)
}
</script>

