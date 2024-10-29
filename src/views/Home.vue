<template>
  <div class="home">
    <h1>Welcome to Word Chain Game</h1>
    <button @click="createNewGame">Create New Game</button>
    <button @click="joinGame">Join Game</button>
  </div>
</template>

<script lang="ts">
import { createGame } from '@/models/Game'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const createNewGame = async () => {
      const userId = 'some-user-id' // Replace with real user ID
      const game = await createGame(userId)
      router.push({ name: 'Game', params: { gameId: game.id } })
    }

    const joinGame = () => {
      router.push({ name: 'JoinGame' })
    }

    return { createNewGame, joinGame }
  },
}
</script>
