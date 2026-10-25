"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="top">
      <div className="wrap nav">
        <a className="brand" href="#top">
          <span className="logo-window">
            <img
              alt="Botmartz AI Solutions"
              className="company-logo"
              height="100"
              src="/assets/botmartz-logo.png"
              width="296"
            />
          </span>
        </a>
        <nav className={`links ${isOpen ? "open" : ""}`} id="links">
          <a href="#solutions" onClick={closeMenu}>
            Solutions
          </a>
          <a href="#industries" onClick={closeMenu}>
            Industries
          </a>
          <a href="#engineering" onClick={closeMenu}>
            Engineering
          </a>
          <a href="#insights" onClick={closeMenu}>
            Insights
          </a>
        </nav>
        <a className="btn" href="#contact">
          Discuss an AI Project <span>↗</span>
        </a>
        <button
          aria-expanded={isOpen ? "true" : "false"}
          className="menu"
          id="menu"
          onClick={toggleMenu}
        >
          {isOpen ? "Close ×" : "Menu +"}
        </button>
      </div>
    </header>
  );
}
