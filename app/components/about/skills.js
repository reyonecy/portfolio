import React from 'react'
import Image from 'next/image'

export default function Skills() {
  return (
    <div className=''>
      <h3 className='text-center text-2xl font-bold'>Tools and Technologies</h3>
      <div className='mt-8'>
        <h3 className='text-center text-xl '>Skills</h3>
       <div className='flex space-x-4 mt-2 flex-wrap max-w-2xl justify-center space-y-4'>
        <Image className='mt-2' src='/tech/html-5.svg' width={60} height={60}/>
        <Image src='/tech/css.svg' width={50} height={50}/>
        <Image src='/tech/js.svg' width={50} height={50}/>
        <Image src='/tech/typescript.svg' width={50} height={50}/>
        <Image src='/tech/react.svg' width={50} height={50}/>
        <Image src='/tech/nextjs-icon.svg' width={60} height={60}/>
        <Image src='/tech/node-js.svg' width={50} height={50}/>
        <Image src='/tech/mongodb.svg' width={50} height={50}/>
        <Image src='/tech/postgresql.svg' width={50} height={50}/>
        <Image src='/tech/mysql.svg' width={50} height={50}/>
        <Image src='/tech/python.svg' width={50} height={50}/>
        <Image src='/tech/c++.png' width={50} height={50}/>
        <Image src='/tech/c.png' width={50} height={50}/>
        <Image src='/tech/php.png' width={50} height={50}/>
       </div>
       <div className='mt-8'>
        <h3 className='text-center text-xl'>Tools</h3>
        <div className='mt-4 flex space-x-4 justify-center'>
          <Image src='/tech/git.svg' width={50} height={50}/>
          <Image src='/tech/github1.png' width={60} height={60}/>
          <Image src='/tech/vscode.svg' width={44} height={44}/>
          <Image src='/tech/postman.svg' width={44} height={44}/>
          <Image src='/tech/linux.svg' width={44} height={44}/>
          <Image src='/tech/excel.svg' width={44} height={44}/>
        </div>
       </div>
      </div>
    </div>
  )
}
