import React, { useState } from 'react'
import './SkillsSection.css'
import { SKILLS } from '../../utils/SkillsData';
import SkillCard from './SkillsCards/SkillCard'
import SkillInfo from './SkillsInfo/SkillInfo';

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);


  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <>
      <section className='skills-container'>
        <h5> Technical Proficiency</h5>
        <div className='skill-content'>
          <div className='skills'>
            {SKILLS.map((item) => (
              <SkillCard
                key={item.title}
                iconURL={item.icon}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={() => {
                  handleSelectSkill(item);
                }} />
            ))}
          </div>

          <div className='skills-info'>
            <SkillInfo
              heading={selectedSkill.title}
              skills={selectedSkill.skills} />
          </div>


        </div>
      </section>
    </>
  )
}

export default SkillsSection