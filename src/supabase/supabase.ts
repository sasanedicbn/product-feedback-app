import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uybqjtampdbwtgkkapwg.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5YnFqdGFtcGRid3Rna2thcHdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0OTYzMjcsImV4cCI6MjA0NjA3MjMyN30.23hezEfRpS2jQW4iZ5lwp27W4HuJrFks4ak4fbDjlPc";

console.log(supabaseUrl, supabaseUrl)
console.log(supabaseKey, supabaseKey)

export const supabase = createClient(supabaseUrl, supabaseKey);
