import React, { useState } from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [accountMenuOpen, setAccountMenuOpen] = useState(false);

  const handleMouseEnter = (menu) => setHoveredMenu(menu);
  const handleMouseLeave = () => setHoveredMenu(null);
  const toggleAccountMenu = () => setAccountMenuOpen(!accountMenuOpen);

  const categories = [
    {
      name: "Men",
      subCategories: [
        "Casual Shoes",
        "Formal Shoes",
        "Boots",
        "Athletic Shoes",
        "Sandals & Slippers",
      ],
    },
    {
      name: "Women",
      subCategories: [
        "Casual Shoes",
        "Formal Shoes",
        "Boots",
        "Sports Shoes",
      ],
    },
    {
      name: "Kids",
      subCategories: [
        "Casual Shoes",
        "Sports Shoes",
        "Boots",
      ],
    },
    {
      name: "Accessories",
      subCategories: ["Laces", "Cleaners", "Soles", "Shoehorn", "Socks", "Shoe Bags"],
    },
  ];

  return (
    <nav className="navbar">
      <div className="container flex justify-between items-center">
        <a href="/" className="nav-brand">
          Shoe Haven
        </a>

        <ul className="categories-list">
          {categories.map((category) => (
            <li
              key={category.name}
              className="category-item"
              onMouseEnter={() => handleMouseEnter(category.name)}
              onMouseLeave={handleMouseLeave}
            >
              <span>{category.name}</span>
              {hoveredMenu === category.name && (
                <div className="dropdown">
                  {category.subCategories.map((sub, index) => (
                    <Link
                      key={index}
                      to={`/products/${category.name.toLowerCase()}/${sub.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="cart-btn" aria-label="Cart">
            🛒
            <span className="cart-count">2</span>
          </Link>

          <div className="relative hamburger-container">
            <button className="hamburger-btn" onClick={toggleAccountMenu} aria-label="Account Menu">
              <div className="hamburger"></div>
              <div className="hamburger"></div>
              <div className="hamburger"></div>
            </button>
            {accountMenuOpen && (
              <div className="dropdown account-dropdown">
                <a href="/profile" className="dropdown-item">
                  Profile
                </a>
                <a href="/orders" className="dropdown-item">
                  Orders
                </a>
                <a href="/settings" className="dropdown-item">
                  Settings
                </a>
                <a href="/logout" className="dropdown-item">
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
