import Link from 'next/link'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';


export const Navbar = () => {
  return (
    <div className='flex  bg-black text-white h-16 justify-between shadow-red-800 px-20 shadow-lg  '>
        <div className='flex items-center '>
           <Link href="#"> <h1 className='font-bold text-6xl hover:text-red-700 cursor-pointer animate-bounce'>R1</h1></Link>
            </div>
            <div className='flex items-center justify-evenly  w-60'>

             <Link className='hover:animate-pulse' href='https://www.linkedin.com/in/reyone-chaudhary-359038271/' target='_blank'><LinkedInIcon fontSize='small'/></Link> 
             <Link className='hover:animate-pulse' href='https://github.com/reyonecy' target='_blank'><GitHubIcon fontSize='small'/></Link> 
             <Link className='hover:animate-pulse' href='https://www.instagram.com/reyone_350/' target='_blank'><InstagramIcon fontSize='small'/></Link> 
             <Link className='hover:animate-pulse' href='https://x.com/reyonecy' target='blank'><XIcon fontSize='small'/></Link> 

            </div>
            <div className='flex items-center space-x-10 text-xl'>
                <Link href="" className='hover:text-red-700 font-bold'>Projects</Link>
                <Link href="" className='hover:text-red-700 font-bold'>Skills</Link>
                <Link href="" className='hover:text-red-700 font-bold'>Contact</Link>
            </div>
    </div>
  )
}
