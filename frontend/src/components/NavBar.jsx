import React from "react";
import '../styles/NavBar.css';
const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <li><a href="/">Home</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/sale">Sale</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
