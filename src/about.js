import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { FaBookDead } from "react-icons/fa";
import { MdScience } from "react-icons/md";
import { TbMathSymbols } from "react-icons/tb";
import { TbMathXDivideY2 } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdAccountBalance } from "react-icons/md";
import { FaBacteria } from "react-icons/fa";
import { MdAgriculture } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import aboutImage from './image.js/about picture.png'
import './About.css';

export default function About (){
    return(
        <div>
           
   <div id="about" className="about-page">
        <div className="intro-about">
      <h1 className="about-h1">Unlock Your Potential with Lessons You Won't Want to Miss</h1>
      <p className="about-p">Imagine a service where you can get expert tutoring anytime, anywhere. EduApply is here to make your learning experience enriching and successful. Join us to master any subject with confidence.</p>
        </div>
        <div className="rotate">
        <div class="train">
            <div className="icon eng" id="html-icon"> <h1>English</h1><p>Grade 1-12</p><div className="icons eng"><FaBookOpen /></div></div>
            <div className="icon hist" id="css-icon"> <h1>History</h1><p>Grade 10-12</p><div className="icons"><FaBookDead /></div></div>
            <div className="icon physics" id="js-icon"><h1>Physical Sciences</h1><p>Grade 10-12</p><div className="icons"><MdScience /></div></div>
            <div className="icon maths-lit" id="react-icon"><h1>Maths Literacy</h1><p>Grade 10-12</p><div className="icons"><TbMathSymbols /></div></div>
            <div className="icon maths" id="node-icon"><h1>Maths</h1><p>Grade 10-12</p><div className="icons"><TbMathXDivideY2 /></div></div>
            <div className="icon geo" id="html-icon"><h1>Geography</h1><p>Grade 10-12</p><div className="icons"><TiWeatherPartlySunny /></div></div>
            <div className="icon acc" id="css-icon"><h1>Accounting</h1><p>Grade 10-12</p><div className="icons"><MdAccountBalance /></div></div>
            <div className="icon ls" id="js-icon"><h1>Life Sciences</h1><p>Grade 10-12</p><div className="icons"><FaBacteria /></div></div>
            <div className="icon agric" id="react-icon"><h1>Agriculture</h1><p>Grade 10-12</p><div className="icons"><MdAgriculture /></div></div>
           
        </div>
    </div>
<div className="about-2">
    <div className="image-about">
    <img src={aboutImage} className="about-image" alt="logo"/>
    </div>
    <div className="tutoring">
        <h1 className="tutoring-1">Imagine a service where you can get expert tutoring anytime, anywhere. </h1>
        <p className="p-about">
            <ul class="custom-arrow-list">
                <li> <span className="mark-gold"><GiCheckMark /></span> EduApply specializes in Grades 10-12 but can accommodate other grades as needed.</li>
                <li> <span className="mark-gold"><GiCheckMark /></span> With a maximum of 10 students per group, we offer CAPS or IEB programmes.</li>           
                <li> <span className="mark-gold"><GiCheckMark /></span> Ask questions, get immediate help, and receive weekly progress reports for both learners and parents.</li>
                <li> <span className="mark-gold"><GiCheckMark /></span> Our top-notch tutors, who hold university qualifications, prioritize your education.</li>
                <li> <span className="mark-gold"><GiCheckMark /></span> EduApply works on all devices, ensuring the best learning experience for every student.</li>
                <div className="tutoring-button">  <button className="tutoring-btn">Learn More...</button></div>
              
            </ul>
        </p>
    
        <h1 className="tutoring-2">Imagine a service where you get comprehensive application assistance anytime, anywhere.</h1>       <p className="p-about">
            <ul class="custom-arrow-list">
            <li> <span className="mark-purple"><GiCheckMark /></span> EduApply specializes in helping you craft standout applications for college, jobs, and scholarships.</li>
            <li> <span className="mark-purple"><GiCheckMark /></span> Our experienced team provides personalized support, ensuring your applications reflect your true potential.</li>
            <li> <span className="mark-purple"><GiCheckMark /></span> With tailored guidance and expert advice, we prioritize your success.</li> 
            <li> <span className="mark-purple"><GiCheckMark /></span> EduApply is committed to making your application process smooth and effective, helping you achieve your academic and career goals.</li>
            <div className="applying-button">  <button className="applying-btn">Learn More...</button></div>
            </ul></p>
    </div>
</div>
        </div>
        </div>
    );
};