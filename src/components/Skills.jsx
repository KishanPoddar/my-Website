import React from 'react'
import { SiReact, SiCss3, SiHtml5, SiJavascript, SiUnity, SiCplusplus, SiTailwindcss } from 'react-icons/si';
import { TbCSharp } from 'react-icons/tb';

const Skills = () => {
  // const skills=[
  //   {logo:'logo-html5', level:'Advance', count:86},
  //   {logo:'logo-css3', level:'Expert', count:95},
  //   {logo:'logo-react', level:'Begineer', count:47},
  //   {logo:'logo-nodejs', level:'Medium', count:60},
  // ]

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
    
    // <section id='skills' className='py-10  relative'>
    //   <div className='mt-8 text-gray-100 text-center'>
    //     <h3 className='text-4xl font-semibold'>My <span className='text-cyan-600'>Skills</span></h3>
    //     <p className='text-gray-400 mt-3 text-lg'> My Knowledge</p>
    //     <div className='flex items-center justify-center mt-12 gap-10 flex-wrap '>
    //       {
    //         skills?.map((skill,i)=>(
    //           <div key={i} className='border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
    //             <div style={{background:`conic-gradient(rgb(8,145,170) ${skill.count}%, #ddd ${skill.count}%)`,}} className='w-32 h-32 flex items-center justify-center rounded-full'>
    //               <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600'>
    //                 <ion-icon name={skill.logo}></ion-icon>
    //               </div>
    //             </div>
    //             <p className='text-xl mt-3'>{skill.level}</p>
    //           </div>
    //         ))
    //       }
    //     </div>
    //   </div>
    // </section>
  )
}

export default Skills