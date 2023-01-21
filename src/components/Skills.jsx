import React from 'react'
import { SiReact, SiCss3, SiHtml5, SiJavascript, SiUnity, SiCplusplus, SiTailwindcss } from 'react-icons/si';
import { TbCSharp } from 'react-icons/tb';

const Skills = () => {
  const skills=[
    {logo:<SiUnity/>},
    {logo:<TbCSharp/>},
    {logo:<SiCplusplus/>},
    {logo:<SiReact/>},
    {logo:<SiHtml5/>},
    {logo:<SiCss3/>},
    {logo:<SiTailwindcss/>},
    {logo:<SiJavascript/>},
  ]

  return (
    <section id='skills' className='pb-20  relative'>
      <div className='mt-8 text-gray-100 text-center'>
        <h3 className='text-4xl font-semibold'>My <span className='text-cyan-400'>Skills</span></h3>
        <p className='text-gray-400 mt-3 text-lg'> My Knowledge</p>
        <div className='flex items-center justify-center mt-12 sm:gap-8 gap-5 flex-wrap lg:max-w-4xl md:max-w-2xl max-w-lg mx-auto p-5'>
          {
            skills.map((icon,i)=>(
              <div key={i} className='border-2 group border-cyan-400 relative sm:w-40 w-32 p-5 rounded-3xl'>
                <div className='flex items-center justify-center sm:text-8xl text-7xl group-hover:text-cyan-400'>
                    <span>{icon.logo}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skills