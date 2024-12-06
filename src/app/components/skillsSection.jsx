import React from 'react'
import SkillCard from './skillCard'
import skills from '../data/skills'


export default function SkillsSection() {
  return (
    
<section id="skills">
  <div className="max-w-5xl mx-auto flex flex-col items-center justify-center p-5">
    <div className="flex self-center text-3xl font-bold mb-4 mt-5">Skills</div>
    <div className="flex flex-wrap justify-center gap-4 md:justify-around lg:justify-start mb-5">
      {skills.map((e, index) => (
       <SkillCard key={index} title={e.title} icon={e.icon} />
      ))}
    </div>
  </div>
</section>

  )
}
