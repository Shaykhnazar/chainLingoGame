<template>
  <div class="p-4">
    <h2 class="text-xl font-bold mb-2">Add a New Word</h2>
    <input
      v-model="newWord"
      type="text"
      placeholder="Enter a word"
      class="border p-2 mb-2 w-full"
    />
    <button @click="addWord" class="bg-blue-500 text-white p-2 rounded">
      Add Word
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '@/utils/supabase.js'

export default {
  name: 'AddWord',
  setup() {
    const newWord = ref('')

    const addWord = async () => {
      if (!newWord.value) return

      const { error } = await supabase
        .from('words') // 'words' is the name of the table
        .insert([{ name: newWord.value }])

      if (error) {
        console.error('Error adding word:', error)
      } else {
        newWord.value = ''
        alert('Word added successfully!')
      }
    }

    return { newWord, addWord }
  },
}
</script>
