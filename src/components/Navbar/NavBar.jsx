import React, { useState } from 'react';
import './Navbar.css'
import { FaBars , FaTimes  } from 'react-icons/fa';
import Mobilenav from '../MobileNav/Mobilenav';
import Logo from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const NavBar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu (!openMenu);
  };


  return (
  <>
  <Mobilenav isOpen={openMenu} toggleMenu={toggleMenu}/>

  <nav className="nav-wrapper">
    <div className="nav-content">
      <div className='logo-section'>
        <img src={Logo} alt='Logo Ravichandran' />
        <p className='logo-text'>Ravichandran</p>
        </div>
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
        </ul>
      
        <button className="menu-btn" onClick={toggleMenu}>
        {/* <FaBars size={20} /> */}
        <span 
        className={"material-symbols-outlined"} 
        style={{fontSize:"1rem"}}>
          {openMenu ? <FaTimes/> : <FaBars/>}
          
        </span> 
        </button>
        
    </div>
 
    
    



  </nav>
  </>
  )
};

export default NavBar;
