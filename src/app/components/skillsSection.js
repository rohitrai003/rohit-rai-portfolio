import React from 'react'
import SkillCard from './skillCard'

export default function SkillsSection() {
  return (
    <div className='max-w-5xl mx-auto flex align-middle justify-center p-5 '>
           {/* <h2 className="text-3xl font-bold mb-4 ">Skills</h2> */}
           <div className='flex align-middle justify-center '>
            <SkillCard/>
           </div>
    </div>
  )
}
