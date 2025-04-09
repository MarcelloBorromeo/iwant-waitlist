
import { createClient } from '@supabase/supabase-js';

// Supabase client initialization
// These environment variables are automatically provided by Lovable's Supabase integration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Check if the Supabase URL and key are available
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase URL or anon key. Make sure your Supabase integration is set up correctly in Lovable.');
}

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
