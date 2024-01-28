import React from 'react'
import { CiMail } from 'react-icons/ci'
import './ContactCard.css'

const ContactCard = ({iconURL , text}) => {
  return (
    <div className='contact-details-card'>
     <div className='icon'>
      <img src={iconURL} alt='text'/>
     </div>


     <p>{text}</p>
    </div>

  )
}

export default ContactCard