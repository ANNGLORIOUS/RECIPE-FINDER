import React from 'react'
import { Link } from 'react-router-dom'
import { FiHome as Home } from 'react-icons/fi';
import { FiHeart as Heart } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  )
}

export default Sidebar

const DesktopSidebar = () => {
  return (
    <div className='p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block '>
      <div className='flex flex-col gap-20 sticky top-10 left-0'>
        <div className='w-full'>
          <img src='https://dynamic.brandcrowd.com/asset/logo/5b3aff90-f08b-4bf9-bca7-c859186a2c03/logo-search-grid-1x?logoTemplateVersion=1&v=637419789958930000&text=COOKING+BLAST&colorpalette=blue' alt='logo' className='hidden md:block' />
          <img src='https://dynamic.brandcrowd.com/asset/logo/dc5ff39e-5a51-4b57-aacd-a0e06658eabc/logo-search-grid-1x?logoTemplateVersion=1&v=637660542271270000&text=COOKING+BLAST&colorpalette=pink' alt='mobile-logo' className='block md:hidden' />
        </div>
        <ul className='flex flex-col items-center md:items-start gap-8'>
          <Link to={'/'} className='flex gap-1'>
            <Home size={'24'} />
            <span className='font-bold hidden md:block'>Home</span>
          </Link>
          <Link to={'/favorites'} className='flex gap-1'>
            <Heart size={'24'} />
            <span className='font-bold hidden md:block'>Favorites</span>
          </Link>
        </ul>
      </div>
    </div>
  )
}

const MobileSidebar = () => {
    return (
        <div className='flex justify-center gap-10 border-t fixed w-full  
        bottom-0 left-0 bg-white z-10 p-2 sm:hidden '>
            <Link to={"/"}>
            <Home size={'24'} className='cursor-pointer' />
            </Link>
            <Link to={"/favorites"}>
            <Heart size={'24'} className='cursor-pointer' />
            </Link>
        </div>
    )
}