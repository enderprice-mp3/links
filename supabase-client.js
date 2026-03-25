import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Replace these with your actual Supabase project URL and anon key
// Found in: Supabase Dashboard → Settings → API
const SUPABASE_URL = 'https://alpnaeowthudqyhusxuo.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFscG5hZW93dGh1ZHF5aHVzeHVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0MzIwOTIsImV4cCI6MjA5MDAwODA5Mn0.oZOzzC8DjjUABcepU3lbssvq2PEws2yY9vCsnKjodpc'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
