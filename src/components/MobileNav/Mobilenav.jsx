import React from 'react'
import './Mobilenav.css'
import logo from '../../assets/logo.png'

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

            <button className="contact-btn" onClick={()=>{}}>Contact</button>
          
        </ul>
       </div>
    </div>
    </>
  )
}

export default Mobilenav