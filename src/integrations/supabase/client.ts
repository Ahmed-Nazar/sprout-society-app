// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ucwgcsitmabvstsxzryp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjd2djc2l0bWFidnN0c3h6cnlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1MjIyNDAsImV4cCI6MjA2MDA5ODI0MH0.5I_aoTEZ0yzTbANaQwGCUkQWGtWSLMW06gSWF8mmzMs";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);