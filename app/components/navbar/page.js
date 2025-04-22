import Link from 'next/link'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';



export default function Navbar () {
  return (
    <div className='fixed z-10 px-2 flex space-x-8  hover:brightness-150 hover:ease-in-out hover:duration-700 top-0 md:bg-black text-white h-16 md:justify-between shadow-red-800 md:px-20 shadow-lg w-full '>
        <div className='flex items-center '>
           <Link href="/"> <h1 className='font-bold text-5xl md:text-6xl text-red-600 cursor-pointer '>R1</h1></Link>
            </div>
            <div className='flex items-center space-x-4 md:justify-evenly md:space-x-6 '>

             <Link className='hover:animate-pulse' href='https://www.linkedin.com/in/reyone-chaudhary-359038271/' target='_blank'><LinkedInIcon fontSize='inherit' className='opacity-90 md:text-xl'/></Link> 
             <Link className='hover:animate-pulse' href='https://github.com/reyonecy' target='_blank'><GitHubIcon fontSize='inherit'  className='opacity-90 md:text-xl'/></Link> 
             <Link className='hover:animate-pulse' href='https://www.instagram.com/reyone_350/' target='_blank'><InstagramIcon fontSize='inherit'  className='opacity-90 md:text-xl'/></Link> 
             <Link className='hover:animate-pulse' href='https://x.com/reyonecy' target='blank'><XIcon fontSize='inherit'  className='opacity-90 md:text-xl'/></Link> 

            </div>
            <div className='flex  items-center md:space-x-10 md:text-xl text-md space-x-4'>
                <Link href="/components/projects/" className='hover:text-red-700 font-bold'>Projects</Link>
                <Link href="/components/contact" className='hover:text-red-700 font-bold'>Contact</Link>
            </div>
    </div>
  )
}
