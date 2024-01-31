import React from 'react'
import './SkillsCard.css'

import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import '../../../utils/fontAwesome';





const SkillCard = ({title, iconURL, isActive,onClick}) => {
  return (
    <>
    <div className={`skills-card ${isActive ? "active" : ""}`} onClick={() => onClick()}>
   
     <div className='skill-icon'>
     <FontAwesomeIcon icon={iconURL}/>    
     </div>
        <span >{title}</span>
    </div>
    </>
  )
}

export default SkillCard