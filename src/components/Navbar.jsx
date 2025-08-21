import React from 'react'
import { Link } from 'react-router-dom'
import menuIcon from '../assets/images/icons/hamburger-5-svgrepo-com.svg'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <div className='w-full bg-[#fceceb] border-b border-gray-300'>
    <div className=' text-black max-w-[1440px] h-[70px] mx-auto px-4 md:px-8 lg:px-10 flex justify-between items-center'>
        <div><h1 className='font-bold text-[1.6rem]'>SERVIQ.</h1></div>
        <nav className='hidden sm:flex gap-10 font-[500]'>
         <Link to="/"><li className='list-none'>Home</li></Link>
         <Link><li className='list-none'>About</li></Link>
         <Link to="/services"><li className='list-none'>Services</li></Link>
        </nav>
        <div className='flex gap-4 items-center'>
        <div><ThemeToggle/></div>
        <div><LanguageToggle/></div>
        <button className='hidden sm:block bg-primary text-white font-[500] px-5 py-2 rounded-[4px]'>Login</button>
        </div>
        <button className='sm:hidden'><img src={menuIcon} className='w-10' alt="" /></button>
    </div>
    </div>
  )
}

export default Navbar