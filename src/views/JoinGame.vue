<template>
  <div class="join-game">
    <h1>Join a Game</h1>
    <input v-model="gameId" placeholder="Enter Game ID" />
    <button @click="joinExistingGame">Join Game</button>
  </div>
</template>

<script lang="ts">
import { addParticipantToGame } from '@/models/GameParticipant'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export default {
  setup() {
    const router = useRouter()
    const gameId = ref('')

    const joinExistingGame = async () => {
      const userId = 'some-user-id' // Replace with real user ID
      await addParticipantToGame(gameId.value, userId)
      router.push({ name: 'Game', params: { gameId: gameId.value } })
    }

    return { gameId, joinExistingGame }
  },
}
</script>
