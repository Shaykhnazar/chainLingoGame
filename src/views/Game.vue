<template>
  <div class="game">
    <h2>Game ID: {{ gameId }}</h2>
    <p v-if="game">Status: {{ game.status }}</p>
    <p v-else>Loading game...</p>
    <input v-model="newWord" placeholder="Enter a word" />
    <button @click="submitWord">Submit Word</button>
    <div v-if="words.length">
      <h3>Words Used:</h3>
      <ul>
        <li v-for="word in words" :key="word.id">{{ word.word }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { getGameById, updateGameStatus } from '@/models/Game'
import {
  addWordToGame,
  getWordsByGameId,
  isWordUsedInGame,
} from '@/models/Word'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const gameId = route.params.gameId
    const game = ref(null)
    const words = ref([])
    const newWord = ref('')

    const fetchGameDetails = async () => {
      game.value = await getGameById(gameId)
      words.value = await getWordsByGameId(gameId)
    }

    const submitWord = async () => {
      if (await isWordUsedInGame(gameId, newWord.value)) {
        alert('Word has already been used!')
        return
      }

      const userId = 'some-user-id' // Replace with real user ID
      await addWordToGame(gameId, userId, newWord.value)
      words.value = await getWordsByGameId(gameId)
      newWord.value = ''
    }

    onMounted(fetchGameDetails)

    return { gameId, game, words, newWord, submitWord }
  },
}
</script>
