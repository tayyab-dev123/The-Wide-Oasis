import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fpmfvmimfrfyxzkgzjnj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwbWZ2bWltZnJmeXh6a2d6am5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwMjkwNDAsImV4cCI6MjA0MjYwNTA0MH0.QKrjEx8um32vlxl5d4ZkT1GQt2sdMpU6csdHgINy3uU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
