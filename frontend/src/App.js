import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/Other/About";
import Contact from "./pages/Other/Contact";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
