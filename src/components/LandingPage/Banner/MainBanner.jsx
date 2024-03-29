import React from 'react'
import ban1 from '../../../assets/ban1.png'
import ban2 from '../../../assets/ban2.png'
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
export default function MainBanner() {
  return (
    <>
          <div className='md:hidden fixed bg-black h-[800px] w-full block'>
          <img className='w-full h-full object-cover' src={ban2} alt="MainBanner" />
          <div className='absolute '>
            <img className='w-40 -mt-[560px] ml-28 h-full object-cover' src={logo} alt="BrandLogo" />
            <Link to={'/product/new-in'}>
            <h1 className='text-white font-roboto text-xs cursor-pointer mt-72 ml-44 '>SHOP ALL</h1>
            </Link>
           
          </div>
          </div>
          <div className='md:block fixed   bg-black h-[650px]  w-full  hidden'>
          <img className='w-full h-full object-cover' src={ban1} alt="MainBanner" />
          <div className='absolute '>
            <img className='w-40 -mt-[350px] ml-96 h-full object-cover' src={logo} alt="BrandLogo" />
            <Link to={'/product/new-in'}>
            <h1 className='text-black font-roboto text-xs cursor-pointer mt-72 ml-44 '>SHOP ALL</h1>
            </Link>
           
          </div>
          </div>
    </>
  )
}
