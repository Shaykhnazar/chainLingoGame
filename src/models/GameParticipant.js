import { supabase } from '@/utils/supabase.js'

export const addParticipantToGame = async (gameId, userId) => {
  const { data, error } = await supabase
    .from('game_participants')
    .insert([{ game_id: gameId, user_id: userId, lives_left: 3 }])

  if (error) throw error
  return data
}

export const getParticipantsByGameId = async gameId => {
  const { data, error } = await supabase
    .from('game_participants')
    .select('*')
    .eq('game_id', gameId)

  if (error) throw error
  return data
}

export const updateParticipantLives = async (participantId, livesLeft) => {
  const { data, error } = await supabase
    .from('game_participants')
    .update({ lives_left: livesLeft })
    .eq('id', participantId)

  if (error) throw error
  return data
}
