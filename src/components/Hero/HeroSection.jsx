import React from 'react'
import './HeroSection.css'
import  ReactImage from '../../assets/REACT.png'
import  HeroImage from '../../assets/hero-image01.jpg'
import  javascriptimage from '../../assets/JavaScript.png'
import  CSSimage from '../../assets/CSS.png' 
import  HTMLimage from '../../assets/HTML.png' 


const HeroSection = () => {
  return (
   <>
   <section className='hero-container'>
    <div className='hero-content'>
      <h2>Hey, I'm Web Developer</h2>
      <p> lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
    </div>
    <div className='hero-image'>
        <div>
            <div className='tech-icon'>
                <img src={ReactImage} alt="React" />
            </div>
            <img src={HeroImage} alt='Hero Image' />
           
            
        </div>
        <div>
            <div className='tech-icon'>
            <img src={HTMLimage} alt='HTML Logo' />
            </div>
            <div className='tech-icon'>
            <img src={CSSimage} alt='CSS Logo' />
            </div>
            <div className='tech-icon'>
            <img src={javascriptimage} alt='javascript Logo' />
            </div>

        </div>
    </div>
   </section>
   </>
  )
}

export default HeroSection