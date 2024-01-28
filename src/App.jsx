import React from 'react'
import './index.css'
import './App.css'
import { Navbar ,HeroSection, SkillsSection, Experience, FooterSection } from './components'
import ContactMe from './components/ContactMe/ContactMe'



const App = () => {
  return (
   <>
   <Navbar/>
   <div className='container'>
    <HeroSection/>
    <SkillsSection/>
    <Experience/>
    <ContactMe/>
   </div>
   <FooterSection/>
   </>
  )
}

export default App