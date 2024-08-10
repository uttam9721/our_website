import React, { useState } from 'react'
import pic from"../../public/photo.avif";
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
const Navbar = () => {

    const [menu,setMenu]=useState(false);
    const navItems=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Experiance"
        },
        {
            id:5,
            text:"Contact"
        },
    ]

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0'>
      <div className='flex justify-between items-center h-16 '>
        <div className='flex space-x-2'>
            <img src={pic} className='h-12 w-12 rounded-full' alt="img" />
            <h1 className='font-semibold text-xl cursor-pointer'>Uttam <span className='text-green-500 text-2xl'>M</span>
            <p className='text-sm' >Full Stack Webdeveloper</p>
            </h1>
        </div>
        {/* desktop navbar */}
      <div>
      <ul className='hidden md:flex space-x-8'>
     {
        navItems.map(({id,text})=>(
           <li className='hover:scale-105 duration-200 cursor-pointer'  key={id}>{text}</li>
        ))
        }
      </ul>
     <div onClick={()=>setMenu(!menu)} className='md:hidden'>
         {menu?<IoMenuOutline size={24} />:<IoClose size={24}/>}</div>
      </div>
    </div>
    {/* mobile navbar */}
    {
        menu && (
            <div>
        <ul className='md:hidden flex flex-col h-screen item-center justify-center space-y-4 text-center '>
        {
        navItems.map(({id,text})=>(
           <li className='hover:scale-105 duration-200 font-semibold cursor-pointer space-y-3 text-xl' 
           key={id}>
            {text}</li>
        ))
        }
        </ul>
    </div>

        )
    }
    
    </div>

    </>
  )
}

export default Navbar
