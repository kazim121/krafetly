
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const sampleData = {
  funnels: [
    { id: 1, name: 'Lead Funnel', status: 'active' },
    { id: 2, name: 'Sales Funnel', status: 'draft' },
  ],
  emails: [
    { id: 1, subject: 'Welcome to Krafetly', sent: true },
    { id: 2, subject: 'New Product Launch', sent: false },
  ]
};

app.get('/api/funnels', (req, res) => res.json(sampleData.funnels));
app.get('/api/emails', (req, res) => res.json(sampleData.emails));

app.listen(PORT, () => console.log(`Krafetly backend running on http://localhost:${PORT}`));
