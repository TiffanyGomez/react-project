const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 5000; 

app.use(cors()); 
app.use(express.json());

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shoestore';
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected successfully'))
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the back-end, it works!' });
});

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Running Shoes', price: 49.99 },
    { id: 2, name: 'Basketball Shoes', price: 89.99 },
  ]);
});

app.post('/api/orders', (req, res) => {
  const order = req.body;
  res.json({ message: 'Order received', order });
});

app.listen(port, () => {
  console.log(`Back-end server running at http://localhost:${port}`);
});
