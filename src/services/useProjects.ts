import { useQuery } from '@tanstack/react-query'
import supabaseClient from '@/utils/supabase-browser'
import { AppSupabaseClient, Table } from '@/types'

export const useProjects = () => {
  // Get profile
  const useGetProjects = (initialData?: Array<Table<'projects'>>) => {
    return useQuery<Array<Table<'projects'>>>(
      ['projects'],
      async () => {
        return getAllProjects(supabaseClient)
      },
      {
        initialData,
      }
    )
  }

  // Get profile by Id
  const useGetProjectsByProfileId = (
    initialData?: Array<Table<'projects'>>
  ) => {
    return useQuery<Array<Table<'projects'>>>(
      ['projects'],
      async () => {
        return getProjectsByProfileId(supabaseClient)
      },
      {
        initialData,
      }
    )
  }

  return {
    useGetProjects,
    useGetProjectsByProfileId,
  }
}

// Supabase
export const getAllProjects = async (
  supabase: AppSupabaseClient = supabaseClient
): Promise<Array<Table<'projects'>>> => {
  const { data, error } = await supabase.from('projects').select('*')

  if (error) {
    console.log('error getAllProjects: ', error)
    throw error
  }

  return data
}

export const getProjectsByProfileId = async (
  supabase: AppSupabaseClient = supabaseClient
): Promise<Array<Table<'projects'>>> => {
  const profileId = 1
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('profile_id', profileId)

  if (error) {
    console.log('error getProjectsByProfileId: ', error)
    throw error
  }

  return data
}
