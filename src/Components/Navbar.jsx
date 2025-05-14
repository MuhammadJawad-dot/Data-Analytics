import React, { useState } from 'react'
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
    const[nav,setNav]=useState(false)

    const handleNav=()=>{
        setNav(!nav)
    }
   
  return (
    <div className= 'max-w-[1240px] mx-auto px-4 h-24 flex justify-between items-center text-white'>
      <h1 className='text-[#00df9a] font-bold text-3xl w-full' >React.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
       
      </ul>
    
    <div onClick={handleNav} className='block md:hidden'>
        {nav?<AiOutlineClose/>:<AiOutlineMenu/>}
    </div>
    <div   className={ nav?' bg-[#040404] w-[40%] h-full fixed left-0 top-0  border-r border-r-gray-900 ease-in-out duration-500':'ease-in-out duration-500 fixed left-[-100%]'}>
        <ul >
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
        <li className='p-4 border-b border-gray-600 '>Home</li>
        <li className='p-4 border-b border-gray-600'>Company</li>
        <li className='p-4 border-b border-gray-600'>Resources</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4 border-b border-gray-600'>Contact</li>  
        </ul>
    </div>
         
      
       
      
    </div>
  )
}

export default Navbar
