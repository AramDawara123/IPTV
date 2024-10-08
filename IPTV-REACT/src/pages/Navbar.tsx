import React, { useState } from "react"; 
import "../CSS/Navbar.css"

/* Navbar component */
export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  return (
    <nav>
      <div className="logo-1">
        <a href="/" className="logo">
          <img src="images/streamium.png" alt="Logo" />
        </a>
      </div>

      {/* Navigatiemenu */}
      <ul className={menuOpen ? "open" : ""}>
        <li><a href="/services">Services</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      {/* Knop voor gratis proefversie */}
      <div className="logo-button-container">
        <button className="btn-1">
          <a href="https://wa.me/qr/2WXRBEQMIZKEB1">Free Trial</a>
        </button>
      </div>

      {/* Menu toggle knop */}
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
