import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import "../components/images/streamium.png"

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav>
      <Link to="/home" className="title">
      <div className="logo"><img src="../components/images/streamium.png" alt="" /></div>
      </Link>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

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
      <button className="btn-1"> <a href="https://wa.me/qr/2WXRBEQMIZKEB1">Free Trial</a></button>
    </nav>
  );
};