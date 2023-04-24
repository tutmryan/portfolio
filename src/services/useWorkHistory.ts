import { useQuery } from '@tanstack/react-query'
import supabaseClient from '@/utils/supabase-browser'
import { AppSupabaseClient, Table } from '@/types'

export const useWorkHistory = () => {
  // Get profile
  const useGetProfile = (initialData?: Array<Table<'work_history'>>) => {
    return useQuery<Array<Table<'work_history'>>>(
      ['work_history'],
      async () => {
        return getAllWorkHistory(supabaseClient)
      },
      {
        initialData,
      }
    )
  }

  // Get profile by Id
  const useGetWorkHistoryByProfileId = (
    initialData?: Array<Table<'work_history'>>
  ) => {
    return useQuery<Array<Table<'work_history'>>>(
      ['work_history'],
      async () => {
        return getWorkHistoryByProfileId(supabaseClient)
      },
      {
        initialData,
      }
    )
  }

  return {
    useGetProfile,
    useGetWorkHistoryByProfileId,
  }
}

// Supabase
export const getAllWorkHistory = async (
  supabase: AppSupabaseClient = supabaseClient
): Promise<Array<Table<'work_history'>>> => {
  const { data, error } = await supabase.from('work_history').select('*')

  if (error) {
    console.log('error getAllWorkHistory: ', error)
    throw error
  }

  return data
}

export const getWorkHistoryByProfileId = async (
  supabase: AppSupabaseClient = supabaseClient
): Promise<Array<Table<'work_history'>>> => {
  const profileId = 1
  const { data, error } = await supabase
    .from('work_history')
    .select('*')
    .eq('profile_id', profileId)

  if (error) {
    console.log('error getWorkHistoryByProfileId: ', error)
    throw error
  }

  return data
}
