import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // use Routes instead of Switch

import Navbar from './components/NavBar';
import Home from './pages/Home/Home';
import About from './pages/Other/About';
import Contact from './pages/Other/Contact';
 
function App() {

  const [message, setMessage] = useState('');  // State to hold the message from the back-end
 
  // Fetch data from the back-end API when the component mounts

  useEffect(() => {

    fetch('http://localhost:5000/api')

      .then((response) => response.json())

      .then((data) => setMessage(data.message));  // Set the message from the API

  }, []);  // Empty dependency array means it runs only once when the component mounts
 
  return (
<Router>
<Navbar />
<div>

        {/* Display the message from the back-end */}
<h1>{message}</h1>
</div>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
<Footer />
</Router>

  );

}
 
export default App;

 