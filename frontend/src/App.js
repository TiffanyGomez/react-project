import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import About from "./pages/Other/About";
import Contact from "./pages/Other/Contact";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Products from "./pages/product/Products";

function App() {
  return (
    <Router>
      <div id="root">
        <Header />
        <NavBar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            {}
            <Route path="/products/:category/:subcategory" element={<Products />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
