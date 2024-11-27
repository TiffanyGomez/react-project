const express = require('express');

const app = express();

const port = 5000;

const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
 

mongoose.connect(process.env.MONGODB_URI, {

  useNewUrlParser: true,

  useUnifiedTopology: true,

})

  .then(() => console.log('Database connected'))

  .catch((err) => console.log(err));
 
// Middleware to parse JSON requests

app.use(express.json());
 
// Simple route for testing


app.get('/api', (req, res) => {

  res.json({ message: 'Hello from the back-end, it works!' });

});
 
// Start the server

app.listen(port, () => {

  console.log(`Back-end server running at http://localhost:${port}`);

});

 