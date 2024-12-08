import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logoImage from "./image.js/logo2.png";
import "./App.css";

import Main from "./main";
import About from "./about";
import Services from "./services";
import Reviews from "./reviews";
import Contact from "./contact";
import Footer from "./footer";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="containa">
      <nav>
        <div className="logo-container">
          <div className="info">EduApply</div>
          <div className="logo">
            <img src={logoImage} alt="logo" />
          </div>
        </div>

        <div className={`navbar ${menuOpen ? "open" : ""}`}>
          <ul id="sidemenu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <span className="cross" onClick={toggleMenu}>
            <ImCross />
          </span>
        </div>
        <span className="bars" onClick={toggleMenu}>
          <FaBars />
        </span>
      </nav>

      {/* Your Components */}
      <Main />
      <About />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
