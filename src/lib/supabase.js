import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qomwciujwvgxuxcubkid.supabase.co';
const supabaseKey = 'sb_publishable_cmSPy2toYwQaVVa_JwVhPA_sz5VYVxI';

export const supabase = createClient(supabaseUrl, supabaseKey);
