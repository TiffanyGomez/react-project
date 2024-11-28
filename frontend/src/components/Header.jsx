import React, { useState, useEffect } from "react";
import "../styles/Header.css"; // Import the CSS file

const NAV_MENU = [
  {
    name: "Home",
    icon: "🏠", // Replace with your icon
  },
  {
    name: "Account",
    icon: "👤", // Replace with your icon
  },
  {
    name: "Docs",
    icon: "📄", // Replace with your icon
    href: "https://www.material-tailwind.com/docs/react/installation",
  },
];

const CAT_MENU = [
  {
    name: "Men",
    icon: "👨‍🦰", // Replace with your icon
  },
  {
    name: "Women",
    icon: "🫦", // Replace with your icon
  },
  {
    name: "Children",
    icon: "👶", // Replace with your icon
  },
  {
    name: "Accessories",
    icon: "👜", // Replace with your icon
  },
];

const NavItem = ({ children, href }) => (
  <li className="nav-item">
    <a href={href || "#"} target={href ? "_blank" : "_self"}>
      {children}
    </a>
  </li>
);

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 0) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <header className="header">
      <div className="header__logo">
        <a href="/" className="logo-text">@STEPPY</a>
      </div>
      <div className="header__menu">
        {/* Desktop Menu */}
        <ul className="desktop-nav">
          {NAV_MENU.map(({ name, icon, href }) => (
            <NavItem key={name} href={href}>
              <span className="icon">{icon}</span>
              {name}
            </NavItem>
          ))}
        </ul>

        <ul className="desktop-cat">
          {CAT_MENU.map(({ name, icon, href }) => (
            <NavItem key={name} href={href}>
              <span className="icon">{icon}</span>
              {name}
            </NavItem>
          ))}
        </ul>


        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={handleOpen}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${open ? "open" : ""}`}>
        {NAV_MENU.map(({ name, icon, href }) => (
          <NavItem key={name} href={href}>
            <span className="icon">{icon}</span>
            {name}
          </NavItem>
        ))}
        <div className="mobile-auth">
          <button className="sign-in-btn">Sign In</button>
          <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <button className="blocks-btn">Blocks</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
