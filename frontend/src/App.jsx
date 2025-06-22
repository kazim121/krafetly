useEffect(() => {
  async function loadData() {
    // Fetch users
    const { data, error } = await supabase.from('users').select('*');
    if (error) console.error('Fetch error:', error);
    else console.log('Users:', data);

    // Insert user
    const { data: newUser, error: insertError } = await supabase.from('users').insert([
      { name: 'Direct User', email: 'direct@example.com' }
    ]);
    if (insertError) {
      console.error('Insert error:', insertError.message); // Log message
    } else {
      console.log('Inserted:', newUser);
    }
  }

  loadData();
}, []);
