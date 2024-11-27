const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// MongoDB Connection
const dbURI = process.env.MONGODB_URI
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit if database connection fails
  });

// Simple route for testing
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the back-end, it works!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Back-end server running at http://localhost:${port}`);
});
