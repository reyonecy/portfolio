import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import HomeIcon from '@mui/icons-material/Home';

export default function Personalinfo() {
  return (
    <div className='flex flex-col justify-center items-center mx-56 '>
        <h2 className='text-2xl'>Enhancing Digital Presence with Innovative Web and App Solutions</h2>
        <p className='opacity-65 mt-6 text-md text-center'>My expertise extends to creating intuitive websites and developing mobile applications by integrating advanced technology. I specialize in delivering dynamic and engaging user experiences that consistently set new industry standards.</p>
        <div className='mt-10 pl-14 flex flex-col space-y-4'>
            <h3><span className='text-red-600 mr-6 text-lg'><PersonOutlineIcon/></span>Reyone Chaudhary</h3>
            <h3><span className='text-red-600 mr-6 text-lg'><CallOutlinedIcon/></span>+977 9849183153</h3>
            <h3><span className='text-red-600 mr-6'><MarkunreadOutlinedIcon/></span>reyonechaudhary@gmail.com</h3>
            <h3><span className='text-red-600 mr-6'><HomeIcon fontSize='medium'/></span>Kathmandu , Nepal</h3>
        </div>
    </div>
  )
}
