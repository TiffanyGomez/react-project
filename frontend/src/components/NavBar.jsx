import React, { useState } from "react";
import "../styles/NavBar.css";
 
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
        "Specialty Shoes",
        "Outdoor Shoes",
        "Lifestyle Shoes",
      ],
    },
    {
      name: "Women",
      subCategories: [
        "Casual Shoes",
        "Formal Shoes",
        "Boots",
        "Athletic Shoes",
        "Sandals",
        "Specialty Shoes",
        "Lifestyle Shoes",
        "Outdoor Shoes",
      ],
    },
    {
      name: "Kids",
      subCategories: [
        "Casual Shoes",
        "Sports Shoes",
        "Boots",
        "Sandals",
        "Dress Shoes",
        "Outdoor Shoes",
        "Comfort Shoes",
        "Seasonal Shoes",
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
        {/* Brand Logo */}
        <a href="/" className="nav-brand">
          Shoe Haven
        </a>
 
        {/* Categories List */}
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
                    <a key={index} href={`/category/${sub.toLowerCase().replace(/\s/g, "-")}`}>
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
 
        {/* Account Menu Hamburger */}
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
    </nav>
  );
};
 
export default NavBar;