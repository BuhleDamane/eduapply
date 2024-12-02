import React from "react";
import './App.css';

import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import"./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import logoImage from './image.js/logo2.png'
import Main from './main'
import About from "./about";
import Services from "./services";
import Reviews from "./reviews";
import Contact from "./contact";
import Footer from "./footer";

export default function Header(){
    return(
<div className="containa">
<nav>
  <div className="logo-container">
    <div className="info">EduApply</div>
    <div className="logo">
      <img src={logoImage} alt="logo" />
    </div>
  </div>

  <div className="navbar">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
      <span className="cross"><ImCross /></span>
    </ul>
    <span className="bars"><FaBars /></span>
  </div>
</nav>
<Main />
<About />
<Services />
<Reviews />
<Contact />
<Footer />
  <div className="contact-page" id="contact">
 
  </div>
        </div>
  
   

  
    );
};
