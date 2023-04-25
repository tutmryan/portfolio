import { useQuery } from '@tanstack/react-query'
import supabaseClient from '@/utils/supabase-browser'
import { AppSupabaseClient, Table } from '@/types'

export const useWorkHistory = () => {
  // Get profile
  const useGetProfile = (initialData?: Array<Table<'company'>>) => {
    return useQuery<Array<Table<'company'>>>(
      ['company'],
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
    initialData?: Array<Table<'company'>>
  ) => {
    return useQuery<Array<Table<'company'>>>(
      ['company'],
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
): Promise<Array<Table<'company'>>> => {
  const { data, error } = await supabase.from('company').select('*')

  if (error) {
    console.log('error getAllWorkHistory: ', error)
    throw error
  }

  return data
}

export const getWorkHistoryByProfileId = async (
  supabase: AppSupabaseClient = supabaseClient
): Promise<Array<Table<'company'>>> => {
  const profileId = 1
  const { data, error } = await supabase
    .from('company')
    .select('*')
    .eq('profile_id', profileId)

  if (error) {
    console.log('error getWorkHistoryByProfileId: ', error)
    throw error
  }

  return data
}
