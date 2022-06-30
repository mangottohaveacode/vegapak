import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const navLinks = document.querySelectorAll(".nav-links li");

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);

    navLinks.forEach((link, index) => {
      console.log(index);
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1.5
        }s`;
      }
    });
  };

  return (
    <div>
      <nav>
        <div className="logo">
          <h4>THE NAV</h4>
        </div>
        <ul className={`nav-links ${isActive ? "nav-active" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
        <div className="burger" onClick={toggleClass}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
