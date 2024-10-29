import { supabase } from '@/utils/supabase.js'

export const createUser = async (telegramId, username, firstName, lastName) => {
  const { data, error } = await supabase
    .from('users')
    .insert([
      {
        telegram_id: telegramId,
        username,
        first_name: firstName,
        last_name: lastName,
      },
    ])

  if (error) throw error
  return data
}

export const getUserByTelegramId = async telegramId => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('telegram_id', telegramId)
    .single()

  if (error) throw error
  return data
}
