import { createClient } from '@supabase/supabase-js'
// import dotenv from 'dotenv';

// Load environment variables from .env file
// dotenv.config();

const supabaseUrl = import.meta.env.VITE_APP_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_APP_SUPABASE_KEY

// console.log(supabaseUrl, supabaseKey)

export const supabase = createClient(supabaseUrl, supabaseKey)
