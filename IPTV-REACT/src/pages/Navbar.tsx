import React, { useState } from "react";
import "../CSS/Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
<nav>
  {/* Left-aligned logo */}
  <Link to="./Home" className="logo">
    <img src="images/streamium.png" alt="Logo" />
  </Link>

  {/* Centered nav links */}
  <ul className={menuOpen ? "open" : ""}>

    <li>
      <NavLink to="/services">Services</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/contact">Contact</NavLink>
    </li>
  </ul>

  {/* Right-aligned button */}
  <div className="logo-button-container">
    <button className="btn-1">
      <a href="https://wa.me/qr/2WXRBEQMIZKEB1">Free Trial</a>
    </button>
  </div>

  {/* Mobile menu icon */}
  <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
    <span></span>
    <span></span>
    <span></span>
  </div>
</nav>
  );
};
