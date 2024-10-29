import { supabase } from '@/utils/supabase.js'

export const addWordToGame = async (gameId, userId, word) => {
  const { data, error } = await supabase
    .from('words')
    .insert([{ game_id: gameId, user_id: userId, word }])

  if (error) throw error
  return data
}

export const getWordsByGameId = async gameId => {
  const { data, error } = await supabase
    .from('words')
    .select('*')
    .eq('game_id', gameId)

  if (error) throw error
  return data
}

export const isWordUsedInGame = async (gameId, word) => {
  const { data, error } = await supabase
    .from('words')
    .select('*')
    .eq('game_id', gameId)
    .eq('word', word)
    .single()

  if (error && error.message !== 'No rows found') throw error
  return !!data
}
