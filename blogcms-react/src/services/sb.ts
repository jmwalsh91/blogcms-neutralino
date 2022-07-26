import { createClient } from '@supabase/supabase-js'

const sbUrl = 'https://qkdyjypdpruelatqkwbh.supabase.co'
const sbKey = import.meta.env.API_KEY
export const sbClient = createClient(sbUrl, sbKey)

