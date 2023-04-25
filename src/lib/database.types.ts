export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      about: {
        Row: {
          content: string | null
          created_at: string | null
          id: number
          image: string | null
          profile_id: number | null
          title: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          id?: number
          image?: string | null
          profile_id?: number | null
          title?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          id?: number
          image?: string | null
          profile_id?: number | null
          title?: string | null
        }
      }
      company: {
        Row: {
          company: string | null
          created_at: string | null
          end: Json | null
          id: number
          logo: string | null
          profile_id: number
          start: Json | null
          title: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string | null
          end?: Json | null
          id?: number
          logo?: string | null
          profile_id: number
          start?: Json | null
          title?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string | null
          end?: Json | null
          id?: number
          logo?: string | null
          profile_id?: number
          start?: Json | null
          title?: string | null
        }
      }
      profile: {
        Row: {
          avatar: string | null
      company: Json[]
          created_at: string | null
          cv_url: string | null
          first_name: string | null
          highlight_images: Json[]
          id: number
          introduction: Json | null
          last_name: string | null
        }
        Insert: {
          avatar?: string | null
          connects?: Json[]
          created_at?: string | null
          cv_url?: string | null
          first_name?: string | null
          highlight_images?: Json[]
          id?: number
          introduction?: Json | null
          last_name?: string | null
        }
        Update: {
          avatar?: string | null
          connects?: Json[]
          created_at?: string | null
          cv_url?: string | null
          first_name?: string | null
          highlight_images?: Json[]
          id?: number
          introduction?: Json | null
          last_name?: string | null
        }
      }
      projects: {
        Row: {
          company_id: number
          created_at: string | null
          description: string | null
          id: number
          link: Json | null
          logo: string | null
          name: string | null
          profile_id: number
        }
        Insert: {
          company_id: number
          created_at?: string | null
          description?: string | null
          id?: number
          link?: Json | null
          logo?: string | null
          name?: string | null
          profile_id: number
        }
        Update: {
          company_id?: number
          created_at?: string | null
          description?: string | null
          id?: number
          link?: Json | null
          logo?: string | null
          name?: string | null
          profile_id?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
