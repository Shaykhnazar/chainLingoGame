<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Word List</h1>
    <ul v-if="words.length">
      <li v-for="word in words" :key="word.id" class="mb-2">
        {{ word.name }}
      </li>
    </ul>
    <p v-else>No words found.</p>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'
import { supabase } from '@/utils/supabase.js'

export default {
  name: 'WordList',
  setup() {
    const words = ref([])

    // Fetching data from Supabase
    const fetchWords = async () => {
      const { data, error } = await supabase
        .from('words') // 'words' is the name of the table
        .select('*')

      if (error) {
        console.error('Error fetching words:', error)
      } else {
        words.value = data
      }
    }

    const subscribeToWords = () => {
      return supabase
        .from('words')
        .on('*', payload => {
          console.log('Change received!', payload)
          fetchWords() // Re-fetch words to update the list
        })
        .subscribe()
    }

    onMounted(() => {
      fetchWords()
      const subscription = subscribeToWords()

      onUnmounted(() => {
        supabase.removeSubscription(subscription)
      })
    })
    return { words }
  },
}
</script>

<style scoped>
/* Basic styling */
</style>
