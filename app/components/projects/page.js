import React from 'react'
import Image from 'next/image'

export default function Projects
() {
  return (
    <div className='mt-28 '>
        <h2 className='text-white text-center text-4xl'>My projects</h2>
        <div className=' mt-10 flex flex-wrap  justify-around mx-6 space-y-2'>
            <div className='cursor-pointer'><Image alt='project-pic' src='/projectspics/gharbikri.png' width={400} height={400}/></div>
            <div className='cursor-pointer'><Image  alt='project-pic' src='/projectspics/orangepass.png' width={420} height={420}/></div>
            <div className='cursor-pointer'><Image  alt='project-pic' src='/projectspics/connectcircle.png' width={420} height={420}/></div>
            
        </div>
    </div>
  )
}
