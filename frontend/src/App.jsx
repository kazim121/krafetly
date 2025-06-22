import React, { useEffect } from 'react';
import { supabase } from './supabase';

const App = () => {
  useEffect(() => {
    async function loadData() {
      const { data, error } = await supabase.from('users').select('*');
      if (error) console.error('Fetch error:', error);
      else console.log('Users:', data);

      const { data: newUser, error: insertError } = await supabase.from('users').insert([
        { name: 'Direct User', email: 'direct@example.com' }
      ]);
      if (insertError) console.error('Insert error:', insertError);
      else console.log('Inserted:', newUser);
    }

    loadData();
  }, []);

  return <h1>Krafetly Supabase-Direct Test</h1>;
};

export default App;
