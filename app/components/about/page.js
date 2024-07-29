'use client'
import React from 'react'
import Personalinfo from './personalinfo'
import Qualifications from './qualifications'
import Skills from './skills'
import { useState } from 'react'

export default function About() {
  const[activeTab,setActiveTab]=useState('personalInfo')
  
  return (
    <div className='flex flex-col items-center justify-center  '>
    <div className="mt-10">
    <h1 className='text-4xl text-center'>About Me</h1>
    <div className='flex justify-center items-center   h-56 space-x-12'>
      <button className={` hover:translate-y-1 border-white border-2 px-8 py-4 rounded-xl font-semibold ${activeTab==='personalInfo'?'bg-red-700':'bg-black'}`} onClick={()=>setActiveTab('personalInfo')}>Personal Information</button>
      <button className={` hover:translate-y-1 border-white border-2 px-8 py-4 rounded-xl ${activeTab==='qualifications'?'bg-red-700':'bg-black'}`} onClick={()=>setActiveTab('qualifications')}>Qualifications</button>
      <button className={` hover:translate-y-1 border-white border-2 px-8 py-4 rounded-xl ${activeTab==='skills'?'bg-red-700':'bg-black'}`} onClick={()=>setActiveTab('skills')}>Skills</button>
    </div>
    </div>
    <div className=''>
     {activeTab==='personalInfo'&&(<Personalinfo/>)}
     {activeTab ==='qualifications' &&(<Qualifications/>)}
     {activeTab ==='skills' &&(<Skills/>)}
    </div>
    </div>
  )
}
