import React from "react";
import './App.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { BsDashLg } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import"./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import logoImage from './image.js/logo2.png'
import lbImage from './image.js/bottom logo.png'
import mapImage from './image.js/south african map.jpg'
import Main from './main'
import About from "./about";
import Services from "./services";
import Reviews from "./reviews";

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
  <div className="contact-page" id="contact">
    <div className="top-footer">
    <h1 class="sub-title">
    Contact Us
</h1>
    <div class="container">
       <div class="row">
        <div class="col contact-left">
<h4>Let us be of service to you!</h4>
<p><span className="contact-icons"><FaPaperPlane /></span>  info@eduapply.co.za</p>
<p><span className="contact-icons"><FaPhoneAlt /></span>  (+27) 00 000 000</p>
<p> 
<span className="contact-icons"><FaTimeline /></span>  Lines are open:
<div>
      <span><BsDashLg /></span> Monday to Friday :  08:00 - 18:00
      <br />
      <span><BsDashLg /></span> Saturday & Sunday : 09:00 - 16:00
    </div> 
</p>
<p> <span className="contact-icons"><FaHome /></span> 5th Street Pastrium on 5th 9th Floor Sandton 2001, South Africa</p>


        </div>
        <div class="col contact-right">
            <form name="submit-to-google-sheet">
                <input type="text" className="name" name="Name" placeholder="Your name" required />
                <input type="number" className="email" name="Email" placeholder="Your phone number" required />
                <input type="email" className="email" name="Email" placeholder="Your email" required />
                <textarea name="Message" className="message" row="6" placeholder="Your message"></textarea>
           <button type="submit" class="btn btn2 btn3">Submit</button>
            </form>
            <span id="msg"></span>
        </div>
       </div> 
    </div>
</div>
    <div className="middle-footer">
        <div className="bottom-logo">
        <img src={lbImage} className="lb d-none d-md-block d-lg-block d-xl-block" alt="logo" />
        </div>
        <div className="container">
        <div className="row middle-middle-bottom">
            <div className="col-3">
                <h3>About us</h3>
                <ul>
                <li> <a href="#services">Who we are</a></li>
                <li> <a href="#contact">Where to find us</a></li>
                <li> <a href="#services">Meet our team</a></li>
                <li> <a href="#contact">Sustainability</a></li>
                <li> <a href="#services">Insights & News</a></li>
                </ul>
            </div>
            <div className="col-3">
            <h3>Services</h3>
                <ul>
                <li> <a href="#services">Online Tutoring Services</a></li>
                <li> <a href="#contact">Application Services</a></li>
                <li></li>
                <li></li>
                <li></li>

                </ul> 
            </div>
             <div className="col-3">
             <h3>Our Work</h3>
                <ul>
                <li> <a href="#services">Reviews</a></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                </ul>
             </div>
             <div className="col-3">
             <h3>Other</h3>
                <ul>
                <li> <a href="#services">EduApply Careers</a></li>
                <li> <a href="#contact">Employee Space</a></li>
                <li></li>
                <li></li>
                <li></li>
                </ul>
             </div>
        </div>
        </div>
        <div className="map">
        <img src={mapImage} className="map d-none d-md-block d-lg-block d-xl-block" alt="logo"/>
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
  </div>
  <div class="copyright">
        <p>Copyright © EduApply. Made with <span className="heart"><FaHeart />  </span> by Buhle Damane.</p>
    </div>
        </div>
  
   

  
    );
};
