import React from 'react'
import './HeroSection.css'
import  ReactImage from '../../assets/REACT.png'
import  HeroImage from '../../assets/hero-image01.jpg'
import  javascriptimage from '../../assets/JavaScript.png'
import  CSSimage from '../../assets/CSS.png' 
import  HTMLimage from '../../assets/HTML.png' 


const HeroSection = () => {

  const openPdfInNewTab = () => {
    const pdfUrl = '/src/assets/ravi-chandran-s.pdf';
    window.open(pdfUrl, '_blank');
  };
  return (
   <>
   <section className='hero-container'>
    <div className='hero-content'>
      <h2>Hey, I'm <span style={{color: "#9077e3"}}>Ravichandran</span></h2>
      <p> Experienced web developer with a passion for creating responsive and user-friendly websites. Skilled in HTML, CSS, JavaScript, and various web development frameworks, with a focus on delivering high-quality, visually appealing web solutions.</p>
      
      <button className="contact-btn" onClick={openPdfInNewTab}>Know More</button>
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