import { headers, cookies } from 'next/headers'
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/lib/database.types'

const createSupabaseServer = () =>
  createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  })

export default createSupabaseServer
