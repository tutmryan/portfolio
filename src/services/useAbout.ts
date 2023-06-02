import supabaseClient from '@/utils/supabase-browser'
import { AppSupabaseClient, Table } from '@/types'

export const useAbout = () => {
  return {}
}

// Supabase
export const getAboutByProfileId = async (
  supabase: AppSupabaseClient = supabaseClient
): Promise<Array<Table<'about'>>> => {
  const profileId = 1
  const { data, error } = await supabase
    .from('about')
    .select('*')
    .eq('profile_id', profileId)

  if (error) {
    console.log('error getAboutByProfileId: ', error)
    throw error
  }

  return data
}
