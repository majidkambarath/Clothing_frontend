import React from 'react'
import Header from '../../layout/Navbar/SubNavbar'
import RegisterForm from './Form'
import Footer from '../../layout/Footer/Footer'
export default function Register() {
  return (
    <>
        <Header/>
        <div className="bg-custom w-full  pt-16  min-h-screen">
          <div className='flex justify-center'>
          <h1 className="md:pt-16 pt-12  font-roboto text-xs  text-gray-500  ">BECOME A MEMBER</h1>
          </div>
       <div className='md:flex justify-center'>
       <RegisterForm />
       </div>
       
      </div>
      <Footer/>
    </>
  )
}
