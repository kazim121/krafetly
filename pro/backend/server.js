const express = require('express');
const app = express();
const supabase = require('./supabase');
require('dotenv').config();

app.use(express.json());

const PORT = process.env.PORT || 3001;

// Test Route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Krafetly Backend!' });
});

// Get all users
app.get('/api/users', async (req, res) => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) return res.status(500).json({ error });
  res.json(data);
});

// Add new user
app.post('/api/users', async (req, res) => {
  const { name, email } = req.body;
  const { data, error } = await supabase.from('users').insert([{ name, email }]);
  if (error) return res.status(500).json({ error });
  res.status(201).json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
