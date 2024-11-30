import React from "react";
import coverImage from './image.js/cover 2.png'
import './Main.css';


export default function Main (){
    return (
    <div>
   <div className="wrap">
   
   <div id="home" className="intro">
       <h1 className="slogan-h1">
       Helping You Achieve Your Ultimate Success!
       </h1>
       <p className="slogan-p">EduApply offers expert application assistance and personalized tutoring to help you achieve your academic and career goals. Join us to make your dreams a reality with EduApply.

       </p>
   </div>
   <div className="image">
   <img src={coverImage} className="cover d-none d-md-block d-lg-block d-xl-block" alt="logo"/>
   </div>
  </div>
  <div className="buttons">
   <button className="butt1">
       Get a Tutor
   </button>
   <button className="butt2">
       Become a Tutor
   </button>
  </div>
   
  </div>

);
};