import React from "react";
import '../styles/Header.css';
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">ShoeStore</a>
      </div>
      <div className="header__search">
        <input type="text" placeholder="Search for shoes..." />
        <button>Search</button>
      </div>
      <div className="header__icons">
        <a href="/login">
          <i className="fas fa-user"></i>
        </a>
        <a href="/cart">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">0</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
