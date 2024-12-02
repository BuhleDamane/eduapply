import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { BsDashLg } from "react-icons/bs";
import './Contact.css';

export default function Contact(){
    return(
        <div>
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
        </div>
    )
}