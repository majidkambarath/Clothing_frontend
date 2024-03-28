import React from 'react'
import ban1 from '../../../assets/ban1.png'
import ban2 from '../../../assets/ban2.png'
export default function MainBanner() {
  return (
    <>
          <div className='md:hidden fixed bg-black h-[800px] w-full block'>
          <img className='w-full h-full object-cover' src={ban2} alt="" />
          </div>
          <div className='md:block fixed   bg-black h-[650px]  w-full  hidden'>
          <img className='w-full h-full object-cover' src={ban1} alt="" />
          </div>
    </>
  )
}
