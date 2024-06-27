import React from "react";
import './App.css';
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
import { GiArchiveRegister } from "react-icons/gi";
import { FaDiceOne } from "react-icons/fa6";
import { FaDiceThree } from "react-icons/fa6";
import { FaDiceFive } from "react-icons/fa6";
import { LuPackageOpen } from "react-icons/lu";
import { FaFacebookSquare } from "react-icons/fa";
import { RiStarSFill } from "react-icons/ri";
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
import coverImage from './image.js/cover 2.png'
import aboutImage from './image.js/about picture.png'
import bw1Image from './image.js/1 black woman.jpg'
import ww1Image from './image.js/1 white woman.jpg'
import bm1Image from './image.js/1 black man.jpg'
import bw2Image from './image.js/2 black woman.jpg'
import bm2Image from './image.js/2 black man.jpg'
import ww2Image from './image.js/2 white woman.jpg'
import wmImage from './image.js/white man.jpg'
import bw6Image from './image.js/6 black woman.jpg'
import bw5Image from './image.js/5 black woman.jpg'
import lbImage from './image.js/bottom logo.png'
import mapImage from './image.js/south african map.jpg'
export default function Heading(){
    return(
<div className="containa">
<nav>
    <div className="info-logo">
        <div className="info"> EduApply</div>
    <div className="logo">
      <img src={logoImage} className="logo" alt="logo"/>
    </div></div>

    <div className="navbarr">  
    <ul>
        <li> <a href="#home">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#services">Services</a></li>
        <li> <a href="#contact">Contact</a></li>
        <span className="cross"><ImCross /></span>
    </ul>
    <span className="bars"><FaBars /> </span>

    </div>
    </nav>
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

        
        <div className="services-page" id="services">
        <div className="container">
        <h1 className="sub-title" >Our Services </h1>
        <h1 className="tutoring-list">Our Tutoring Services</h1>
        <div className="services-list serv-list">
            <div>
                <span className="span-icon serv"><GiArchiveRegister /></span>
                <h2 >Registration Fee</h2>
                <p className="tut-p">Secure your spot with our exclusive one-time registration fee.</p>
                <p className="pp-tutor">R150.00</p>
            </div>
            <div>
                <span className="span-icon serv"><FaDiceOne /></span>
                <h2>1 Subject</h2>
                <p className="tut-p">Explore a single subject from our diverse tutoring range tailored to your success.</p>
                <p className="pp-tutor">R150.00</p>
            </div>
            <div>
                <span className="span-icon serv"><FaDiceThree /></span>
                <h2>3 Subjects</h2>
                <p className="tut-p">Master three subjects from our tailored tutoring range for your academic success.</p>
                <p className="pp-tutor">R350.00</p>
            </div>
            <div>
                <span className="span-icon serv"><FaDiceFive /></span>
                <h2>5 Subjects</h2>
                <p className="tut-p">Excel in five subjects with our personalized tutoring programs for your academic success.</p>
                <p className="pp-tutor">R650.00</p>
            </div>
            <button className="tutor">Book Your Slot</button>
        </div>
        </div>
        <div className="container">
        <h1 className="applying-list">Our application Services</h1>
        <div className="services-list app-list">
            <div>
                <span className="span-icon app"><LuPackageOpen /></span>
                <h2>Package 1</h2>
                <p className="app-p">Complete one tertiary application with our specialized service.</p>
                <p className="pp-apply">R25.00</p>
            </div>
            <div>
            <span className="span-icon app"><LuPackageOpen /></span>
                <h2>Package 2</h2>
                <p className="app-p">Submit up to Eight tertiary applications through our specialized service.</p>
                <p className="pp-apply">R170.00</p>
            </div>
            <div>
            <span className="span-icon app"><LuPackageOpen /></span>
                <h2>Package 3</h2>
                <p className="app-p">Effortlessly manage applications for Ten universities plus the NBT Test with our specialized service.</p>
                <p className="pp-apply">R250.00</p>
            </div>
            <div>
            <span className="span-icon app"><LuPackageOpen /></span>
                <h2>Package 4</h2>
                <p className="app-p">Efficiently handle applications for up to 10 universities and NSFAS with our specialized service.</p>
                <p className="pp-apply">R250.00</p>
            </div>
           <button className="apply">Book Your Slot</button>
        </div>
        </div>
        </div>
        <div className="reviews">
            <div>
                <h1 className="review-h1">98% of students rave that EduApply is the ultimate solution for boosting academic results!</h1>
            <p className="review-p">Over 1,000 students confirm that EduApply is the ultimate solution for boosting academic results.</p>
            </div>

            <div className="rotate-review">
        <div class="train-review">
            <div className="icon-review "> <div className="profile-name"> <div className="pic-name"><img src={bw1Image} className=" review-img " alt="logo"/> <h1>Mpumi Skosana</h1> </div> <div className="fb"> <span><FaFacebookSquare /> </span></div> </div>  <p className="date">June 14, 2024</p><p className="star-reviews"><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span></p> <p className="review-message">EduApply has been a game-changer for me. The tutors are incredibly knowledgeable and supportive, and the personalized attention made a huge difference. I saw a significant improvement in my grades, especially in math and science. I highly recommend EduApply to anyone looking to boost their academic performance!</p></div>
            <div className="icon-review "> <div className="profile-name"> <div className="pic-name"><img src={ww1Image} className=" review-img " alt="logo"/> <h1>Emma Beyers</h1> </div> <div className="insta"> <span><FaInstagramSquare />            </span></div> </div>  <p className="date">May 15, 2024</p><p className="star-reviews"><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span></p> <p className="review-message">I chose EduApply's Package 3 and was thrilled with the results. I received acceptance letters from four universities, including my top choice! The guidance and support throughout the application process were exceptional. EduApply made my dream a reality. Highly recommend their services for university applications!</p></div>
            <div className="icon-review "> <div className="profile-name"> <div className="pic-name"><img src={bm1Image} className=" review-img " alt="logo"/> <h1>Thabo Jakes</h1> </div> <div className="fb"> <span><FaFacebookSquare /> </span></div> </div>  <p className="date">April 30, 2024</p><p className="star-reviews"><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span></p> <p className="review-message">EduApply's service was outstanding. With their assistance, my applications were completed within 24 hours. I received acceptance letters from multiple universities. Their efficiency and expertise made the entire process stress-free and successful. I highly recommend EduApply for anyone needing fast and reliable application support</p></div>
            <div className="icon-review "> <div className="profile-name"> <div className="pic-name"><img src={bw2Image} className=" review-img " alt="logo"/> <h1>Queen Thembi</h1> </div> <div className="insta"> <span><FaInstagramSquare />            </span></div> </div>  <p className="date">August 12, 2023</p><p className="star-reviews"><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span></p> <p className="review-message">EduApply went above and beyond to accommodate my child in Afrikaans, despite it not being part of their standard package. Their flexibility and dedication ensured my child received excellent tutoring. I'm impressed by their commitment to student success and highly recommend their personalized tutoring services.</p></div>
            <div className="icon-review "> <div className="profile-name"> <div className="pic-name"><img src={bm2Image} className=" review-img " alt="logo"/> <h1>Thakgi Moloi</h1> </div> <div className="fb"> <span><FaFacebookSquare /> </span></div> </div>  <p className="date">December 10, 2022</p><p className="star-reviews"><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span></p> <p className="review-message">What I love about EduApply is that they teach my child from the comfort of our home. It ensures my child's safety and provides peace of mind while receiving top-notch education. Their commitment to remote learning with exceptional tutors is commendable and highly reassuring.</p></div>
            <div className="icon-review "> <div className="profile-name"> <div className="pic-name"><img src={ww2Image} className=" review-img " alt="logo"/> <h1>Danja Van Tonder</h1> </div> <div className="fb"> <span><FaFacebookSquare /> </span></div> </div>  <p className="date">September 19, 2021</p><p className="star-reviews"><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span></p> <p className="review-message">The only regret I have about EduApply is not discovering them sooner. With their exceptional tutoring, I could have mastered Physical Sciences and Life Sciences to achieve distinctions much earlier. Their dedicated support and quality teaching make a significant difference in academic success.</p></div>
            <div className="icon-review "> <div className="profile-name"> <div className="pic-name"><img src={wmImage} className=" review-img  " alt="logo"/> <h1>Greg Van Wyk</h1> </div> <div className="fb"> <span><FaFacebookSquare /> </span></div> </div>  <p className="date">June 30, 2021</p><p className="star-reviews"><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span></p> <p className="review-message">The relief of not stressing about matric workload and applications is the best thing about EduApply. Forever grateful for their support, they've made applying stress-free and my journey smoother. Highly recommend their services for anyone navigating the challenges of matriculation.</p></div>
            <div className="icon-review "> <div className="profile-name"> <div className="pic-name"><img src={bw6Image} className=" review-img " alt="logo"/> <h1>Zintle Zee</h1> </div> <div className="insta"> <span><FaInstagramSquare />            </span></div> </div>  <p className="date date-zee">August 12, 2020</p><p className="star-reviews"><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span></p> <p className="review-message">My math score jumped from 34% to a remarkable 76%—an incredible improvement thanks to EduApply. They've truly transformed my understanding and boosted my confidence in mathematics. Highly recommend their tutoring services for anyone looking to achieve significant academic progress!</p></div>
            <div className="icon-review "> <div className="profile-name"> <div className="pic-name"><img src={bw5Image} className=" review-img " alt="logo"/> <h1>Lebo Mahosa</h1> </div> <div className="fb"> <span><FaFacebookSquare /> </span></div> </div>  <p className="date">November 30, 2020</p><p className="star-reviews"><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span><span className="review-stars"><RiStarSFill /> </span></p> <p className="review-message">EduApply is so excellent that I've been recruiting my loved ones to use their services. My child has benefited greatly from their tutoring, and next year, for Grade 12, we'll be using their application and tutoring services again. Highly recommend them for their comprehensive support and expertise!</p></div>
        </div>
        </div>
        </div>
  <div className="contact-page" id="contact">
    <div className="top-footer">
    <h1 class="sub-title">
    Contact Us
</h1>
    <div class="container">
       <div class="row">
        <div class="col contact-left">
<h4>Let us be of service to you!</h4>
<p><span className="contact-icons"><FaPaperPlane /></span>  ziziphodamane@gmail.com</p>
<p><span className="contact-icons"><FaPhoneAlt /></span>  (+27) 83 483 1795</p>
<p> 
<span className="contact-icons"><FaTimeline /></span>  Lines are open:
<div>
      <span><BsDashLg /></span> Monday to Friday :  08:00 - 18:00
      <br />
      <span><BsDashLg /></span> Saturday & Sunday : 09:00 - 16:00
    </div> 
</p>
<p> <span className="contact-icons"><FaHome /></span> 5th Street Atrium on 5th 9th Floor Sandton 2196, South Africa</p>


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
