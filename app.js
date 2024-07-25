const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Basic routing
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// GET method route
app.get('/items', (req, res) => {
  
  res.json({ message: 'GET all items' });
});

// POST method route
app.post('/items', (req, res) => {
  
  const newItem = req.body;
  res.json({ message: 'Item created', item: newItem });
});

// PUT method route
app.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const updatedItem = req.body;
  res.json({ message: 'Item ${id} updated', item: updatedItem });
});

// DELETE method route
app.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: 'Item ${id} deleted' });
});

app.listen(port, () => {
  console.log('Server is running on http://localhost:${port}');
});