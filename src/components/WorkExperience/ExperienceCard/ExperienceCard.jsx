import React from 'react'
import './ExperienceCard.css'

const ExperienceCard = ({ details }) => {
    return (
        <div className='work-experience-card'>
            <h6>{details.title}</h6>
            <p style={{"margin-bottom":"0.8rem"}}>{details.role}</p>
            <div className='work-duration' >
            {details.date}
            </div>

            <ul>
                {details.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ExperienceCard