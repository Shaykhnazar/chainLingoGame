import { supabase } from '@/utils/supabase.js'

export const createGame = async createdBy => {
  const { data, error } = await supabase
    .from('games')
    .insert([{ created_by: createdBy, status: 'waiting' }])

  if (error) throw error
  return data
}

export const getGameById = async gameId => {
  const { data, error } = await supabase
    .from('games')
    .select('*')
    .eq('id', gameId)
    .single()

  if (error) throw error
  return data
}

export const updateGameStatus = async (gameId, status) => {
  const { data, error } = await supabase
    .from('games')
    .update({ status })
    .eq('id', gameId)

  if (error) throw error
  return data
}
