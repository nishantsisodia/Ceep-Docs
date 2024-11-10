import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoShareSocialSharp } from "react-icons/io5";


const Navbar = ({name,address, setShowPopup}) => {
  return (
    <div className='flex justify-between items-center px-4 py-3 relative w-full   bg-gradient-to-r from-green-500 to-teal-500 p-4 text-white '>
        <div className='font-semibold text-xl overflow-hidden h-10 sm:w-[250px]   w-[190px] flex items-center'><img className='  mix-blend-color-dodge ' src="./logo.png" alt=""  /></div>
        <div className='flex gap-2 items-center '>

       <button className='bg-blue-800 px-4 py-2 rounded-md text-sm shadow-xl'><NavLink to={`${address}`}>{name}</NavLink></button>
       {window.location.href == "http://localhost:3000/read" ?  < IoShareSocialSharp className='text-[35px] rounded-lg cursor-pointer bg-blue-800 p-2' onClick={()=>setShowPopup(true)}/>: ''}
        </div>


    </div>
  )
}

export default Navbar
