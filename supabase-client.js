import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Replace these with your actual Supabase project URL and anon key
// Found in: Supabase Dashboard → Settings → API
const SUPABASE_URL = 'YOUR_SUPABASE_URL'
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
