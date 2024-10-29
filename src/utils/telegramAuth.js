import { supabase } from '@/utils/supabase.js'
import { createAccessToken, createRefreshToken } from '@/utils/createJWT.js'

// Custom Telegram authentication with Supabase
export const signInWithTelegram = async (telegramId, hash) => {
  try {
    // Custom JWT payload for Supabase
    const payload = { telegram_id: telegramId, hash: hash }

    // Create Access and Refresh Tokens
    const accessToken = createAccessToken(payload)
    const refreshToken = createRefreshToken(payload)

    if (!accessToken || !refreshToken) {
      console.error('Error: JWT creation failed.')
      return null
    }

    // Use JWT tokens to authenticate with Supabase
    const { data, error } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    })

    if (error) {
      console.error('Supabase Auth Error:', error.message)
      return null
    }

    return data
  } catch (error) {
    console.error('Custom Auth Error:', error.message)
    return null
  }
}
