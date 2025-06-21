import { supabase } from './supabase';

export async function fetchUsers() {
  const { data, error } = await supabase.from('users').select('*');
  if (error) throw error;
  return data;
}

export async function createUser(userData) {
  const { data, error } = await supabase.from('users').insert([userData]);
  if (error) throw error;
  return data;
}