import React, { useState } from 'react';
import './Navbar.css'
import { FaBars , FaTimes  } from 'react-icons/fa';
import Mobilenav from '../MobileNav/Mobilenav';
import Logo from '../../assets/logo.png'

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
          <button className="contact-btn" onClick={()=>{}}>Contact</button>
          
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
