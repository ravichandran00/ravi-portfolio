import React from 'react'
import './Mobilenav.css'
import logo from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Mobilenav = ({isOpen, toggleMenu}) => {
  return (
    <>
    <div className={`mobile-menu ${isOpen? "active" : ""}`}  onClick={toggleMenu}>
       <div className='mobile-menu-container'>
         <img src={logo} alt='Logo'/>
          
         <ul>
            <li>
                <a className="menu-item">Home</a>
            </li>
            <li>
                <a className="menu-item">Skills</a>
            </li>
            <li>
                <a className="menu-item">Work</a>
            </li>
            <li>
                <a className="menu-item">Contact Me</a>
            </li>
            <div className='social-icons'>
            <a href="https://github.com/ravichandran00" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
            <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
            </div> 
            <button className="contact-btn" onClick={()=>{}}>Contact</button>
          
        </ul>
       </div>
    </div>
    </>
  )
}

export default Mobilenav