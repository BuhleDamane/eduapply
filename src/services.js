import React from "react";
import { GiArchiveRegister } from "react-icons/gi";
import { FaDiceOne } from "react-icons/fa6";
import { FaDiceThree } from "react-icons/fa6";
import { FaDiceFive } from "react-icons/fa6";
import { LuPackageOpen } from "react-icons/lu";
import './Services.css';

export default function Services (){
    return(
        <div>
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
        </div>
        <button className="tutor">Book Your Slot</button>
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
        </div>
        <button className="apply">Book Your Slot</button>
        </div>
        </div>
        </div>
    );
};