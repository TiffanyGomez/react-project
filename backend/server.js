// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

// Initialize app
const app = express();
const port = process.env.PORT || 5000; // Use PORT from .env or default to 5000

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// MongoDB Connection
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shoestore'; // Fallback to local MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected successfully'))
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit process if unable to connect to database
  });

// Test Route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the back-end, it works!' });
});

// Example Routes (Add more as needed)
app.get('/api/products', (req, res) => {
  // Example: Replace with actual MongoDB query
  res.json([
    { id: 1, name: 'Running Shoes', price: 49.99 },
    { id: 2, name: 'Basketball Shoes', price: 89.99 },
  ]);
});

app.post('/api/orders', (req, res) => {
  const order = req.body;
  // Example: Add logic to save order to database
  res.json({ message: 'Order received', order });
});

// Start Server
app.listen(port, () => {
  console.log(`Back-end server running at http://localhost:${port}`);
});
