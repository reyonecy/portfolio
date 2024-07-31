'use client'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Call,  MarkunreadOutlined,  } from '@mui/icons-material';
import { useState } from 'react';

export default function Contact() {
    const [message , setMessage] = useState('')

    const clicked =(e)=>{
      e.preventDefault();
      setMessage("Form submitted successfully!")
    }

   
  return (
    <div className='mt-28 mx-20'>
        <p className='text-xl'>-- Greetings <span className='text-2xl'>🤝</span></p>
        <h2 className='text-4xl mt-6'>Want To collaborate ?</h2>
        <p className='mt-4 opacity-55'>Lets join forces and create something incredible together! Any ideas or preferences ?</p>
        <div className='mt-10 space-y-4 text-lg'>
          <div className='flex space-x-5'><LinkedInIcon color=''/><p>Reyone Chaudhary</p></div>
          <div className='flex space-x-5'><MarkunreadOutlined color=''/><p>reyonechaudhary@gmail.com</p></div>
          <div className='flex space-x-5'><Call color=''/><p>+977 9849183153</p></div>
        </div>
       
        <form className='mt-10  w-96 space-y-4' onSubmit={clicked}>
        <h3 className='text-green-800 text-center'>{message}</h3>
          <input className='bg-black w-96 border-gray-800 rounded-lg px-4 py-2 border-2 focus:outline-none' required  type='text' placeholder='Full Name'></input>
          <input className='bg-black w-96 border-gray-800 rounded-lg px-4 py-2 border-2 focus:outline-none' required  type='email' placeholder='Email'></input>
          <textarea className='bg-black w-96 border-gray-800 rounded-lg px-4 py-2 border-2 focus:outline-none'  required   placeholder='Message'></textarea>
          <button type='submit' className='bg-red-700 border-2  border-gray-800 w-96 rounded-lg px-4 py-2 '>Submit</button>
        </form>
        
    </div>
  )
}
