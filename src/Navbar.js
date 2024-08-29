
import React from "react";
import './App.css';
import { PiStudentDuotone } from "react-icons/pi";
import { MdDashboard } from "react-icons/md";
import { PiSealPercentFill } from "react-icons/pi";
import { BsClipboardDataFill } from "react-icons/bs";
import { PiExamBold } from "react-icons/pi";

function SideNav(){
    return (
        <div className="sidenav">
            <div className='logo'>
            <img className='logo1' src='https://i.pinimg.com/736x/48/a3/54/48a354314bb3517dabc705eb3ee8b968.jpg'></img>            </div> 
            <div className='menu'>
            <ul>
                <li><a href="/"><PiStudentDuotone /></a></li>
                <li><a href="#doctors"><MdDashboard /></a></li>
                <li><a href="#patients"><PiSealPercentFill /></a></li>
                <li><a href="#patients"><BsClipboardDataFill /></a></li>
                <li><a href="#appointments"><PiExamBold /></a></li>
            </ul>
            </div>        
        </div>
    );
};

export default SideNav;