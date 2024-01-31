import React from 'react';
import './ContactMe.css';
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import '../../utils/fontAwesome';
import ContactCard from './ContactInfoCard/ContactCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
    return (
        <section className='contact-container'>
            <h5>Contact Me</h5>

            <div className='contact-content'> 
               <div style={{flex:1}}>
                
                <ContactCard text={"Ravichan.s@outlook.com"} iconURL="mail" />
                <ContactCard text={"GitHub"}  iconURL="cogs"/>
               </div>
               <div style={{flex:1}}>
                <ContactForm/>
               </div>
            </div>
        </section>
    )
}

export default ContactMe