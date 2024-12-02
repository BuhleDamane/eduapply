import React from "react";
import './Footer.css';
import lbImage from './image.js/bottom logo.png'
import mapImage from './image.js/south african map.jpg'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Footer (){
    return(
        <div>
      <div className="middle-footer">
  <div className="footer-container">
    <div className="bottom-logo">
      <img src={lbImage} className="lb" alt="EduApply Logo" />
    </div>
    <div className="footer-links">
      <div className="footer-column">
        <h3>About Us</h3>
        <ul>
          <li><a href="#services">Who we are</a></li>
          <li><a href="#contact">Where to find us</a></li>
          <li><a href="#services">Meet our team</a></li>
          <li><a href="#contact">Sustainability</a></li>
          <li><a href="#services">Insights & News</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Services</h3>
        <ul>
          <li><a href="#services">Online Tutoring Services</a></li>
          <li><a href="#contact">Application Services</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Our Work</h3>
        <ul>
          <li><a href="#services">Reviews</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Other</h3>
        <ul>
          <li><a href="#services">EduApply Careers</a></li>
          <li><a href="#contact">Employee Space</a></li>
        </ul>
      </div>
    </div>
    <div className="map">
      <img src={mapImage} className="map-image" alt="EduApply Location Map" />
    </div>
  </div>
</div>

    <div className="bottom-footer">
        <div className="TsCs">
            <ul>
        <li> <a href="#home">EduApply Policies</a></li>
        <span>|</span>
        <li> <a href="#about">Terms of use</a></li>
        <span>|</span>
        <li> <a href="#services">Privacy statement</a></li>
        <span>|</span> 
        <li> <a href="#contact">Cookie statement</a></li>
        <span>|</span>
        <li> <a href="#services">Privacy preferance</a></li>
        <span>|</span>
        <li> <a href="#contact">Modern Slavery statement</a></li>
    </ul>
    </div>
        <div className="social-links">
            <ul>
        <li> <a href="#home"><FaLinkedin /></a></li>
        <li> <a href="#about"><FaFacebookSquare /></a></li>
        <li> <a href="#services"><FaInstagramSquare /></a></li>
        <li> <a href="#contact"><FaWhatsapp />  </a></li>
    </ul>
    </div>
    </div>
    <div class="copyright">
        <p>Copyright © EduApply. Made with <span className="heart"><FaHeart />  </span> by Buhle Damane.</p>
    </div>
        </div>
    )
}