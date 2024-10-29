<script>
import { ref, onMounted } from 'vue'
import { supabase } from '@/utils/supabase.js'

export default {
  name: 'TelegramAuth',
  setup() {
    const user = ref(null)

    // Function to initialize Telegram Web App
    const initTelegramAuth = () => {
      if (window.Telegram?.WebApp) {
        const telegramData = window.Telegram.WebApp.initDataUnsafe
        user.value = telegramData?.user

        // If Telegram user data exists, authenticate with Supabase
        if (user.value) {
          authenticateWithSupabase(telegramData)
        }
      }
    }

    // Authenticate with Supabase using Telegram data
    const authenticateWithSupabase = async telegramData => {
      const { id, hash } = telegramData?.user || {}

      if (id && hash) {
        // Authenticate with Supabase using Telegram ID (custom auth logic)
        const { error } = await supabase.auth.signIn({
          provider: 'telegram',
          options: {
            telegram_id: id,
            hash: hash,
          },
        })

        if (error) {
          console.error('Supabase Auth Error:', error.message)
        }
      }
    }

    // Logout function
    const logout = async () => {
      await supabase.auth.signOut()
      user.value = null
    }

    onMounted(() => {
      initTelegramAuth()
    })

    return { user, logout }
  },
}
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100"
  >
    <!-- Main Container -->
    <div v-if="user" class="text-center p-4">
      <h1 class="text-2xl font-bold mb-4">Welcome, {{ user?.first_name }}!</h1>
      <p class="text-gray-700 mb-4">You are authenticated via Telegram.</p>
      <button @click="logout" class="bg-red-500 text-white p-2 rounded">
        Logout
      </button>
    </div>

    <div v-else class="text-center p-4">
      <h1 class="text-2xl font-bold mb-4">Loading Telegram User Data...</h1>
    </div>
  </div>
</template>

<style scoped></style>
