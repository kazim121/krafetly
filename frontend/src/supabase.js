import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tzduqrxpjcoupdjmhqeb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6ZHVxcnhwamNvdXBkam1ocWViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1MTMzNzEsImV4cCI6MjA2NjA4OTM3MX0.pwCI00zkb88sgBgAVAdAbLYPAMIojAWgQv1YifXcoZ0'

export const supabase = createClient(supabaseUrl, supabaseKey)
