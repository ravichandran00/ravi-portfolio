import React from 'react'
import './ContactCard.css'
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';


const ContactCard = ({iconURL , text}) => {
  return (
    <div className='contact-details-card'>
     <div className='icon'>
     <FontAwesomeIcon icon={iconURL}/>
     </div>
     <p>{text}</p>
    </div>

  )
}

export default ContactCard