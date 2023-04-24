import { useQuery } from '@tanstack/react-query'
import supabaseClient from '@/utils/supabase-browser'
import { AppSupabaseClient, Table } from '@/types'

export const useProfile = () => {
  // Get profile
  const useGetProfile = (initialData?: Array<Table<'profile'>>) => {
    return useQuery<Array<Table<'profile'>>>(
      ['profile'],
      async () => {
        return getAllProfiles(supabaseClient)
      },
      {
        initialData,
      }
    )
  }

  // Get profile by Id
  const useGetProfileById = (initialData?: Array<Table<'profile'>>) => {
    return useQuery<Array<Table<'profile'>>>(
      ['profile'],
      async () => {
        return getProfileById(supabaseClient)
      },
      {
        initialData,
      }
    )
  }

  return {
    useGetProfile,
    useGetProfileById,
  }
}

// Supabase
export const getAllProfiles = async (
  supabase: AppSupabaseClient = supabaseClient
): Promise<Array<Table<'profile'>>> => {
  const { data, error } = await supabase.from('profile').select('*')

  if (error) {
    console.log('error getAllProfiles: ', error)
    throw error
  }

  return data
}

export const getProfileById = async (
  supabase: AppSupabaseClient = supabaseClient
): Promise<Array<Table<'profile'>>> => {
  const { data, error } = await supabase.from('profile').select('*').eq('id', 1)
  if (error) {
    console.log('error getAllProfileById: ', error)
    throw error
  }

  return data
}
