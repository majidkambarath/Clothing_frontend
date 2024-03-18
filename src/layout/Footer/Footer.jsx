import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import Brandlogo from '../../assets/favicon.png'
import { NavLink } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="w-full h-80 bg-custom border-black/35 border-t-2 flex ">
        <div className="md:mt-20 md:w-1/2 md:pl-20 mt-5 pl-32 ">
          <NavLink to={'/'}>
          <img className="w-1/4 ml-8" src={Brandlogo} alt="FooterImage" />
          </NavLink>
          
          {/* <h1 className="font-Rampart text-4xl  cursor-pointer">BLNZED</h1> */}
          <div className="md:flex gap-5 hidden ml-10 md:block ">
            <h1 className="text-2xl md:mt-8 cursor-pointer  transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300">
              <FaInstagram />
            </h1>
            <h1 className="text-2xl md:mt-8 cursor-pointer  transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 ">
              <FaWhatsapp />
            </h1>
          </div>
          <h1 className="font-roboto text-xs font-semibold md:mt-10 md:pt-0 md:-ml-0 -ml-12 pt-52 text-gray-600">
            © 2024 BLNZED, ALL RIGHTS RESERVED
          </h1>
        </div>

        <div className=" absolute md:relative md:flex md:w-2/3 md:justify-evenly mt:mt-20 mt-24 flex">
          <div className=" ml-5 md:ml-0 ">
            <ul>
              <li className="font-roboto font-bold text-xs">HELP</li>
              <li className="font-roboto cursor-pointer mt-4 text-gray-500 text-xs">
                MEMBERS LOGIN
              </li>
              <li className="font-roboto cursor-pointer mt-2 text-gray-500 text-xs">
                EXCHANGES/RETURNS
              </li>
              <li className="font-roboto cursor-pointer mt-2 text-gray-500 text-xs">
                FAQ
              </li>
              <li className="font-roboto cursor-pointer mt-2 text-gray-500 text-xs">
                TERMS
              </li>
              <li className="font-roboto cursor-pointer mt-2 text-gray-500 text-xs">
                SHIPPING
              </li>
            </ul>
          </div>
          <div className="ml-[150px] md:ml-0">
            <ul>
              <li className="font-roboto font-bold text-xs">COMPANY</li>
              <li className="font-roboto cursor-pointer mt-4 text-gray-500 text-xs">
                STORY
              </li>
              <li className="font-roboto cursor-pointer mt-2 text-gray-500 text-xs">
                OUR STORES
              </li>
              <li className="font-roboto cursor-pointer mt-2 text-gray-500 text-xs">
                CAREERS
              </li>
              <li className="font-roboto cursor-pointer mt-2 text-gray-500 text-xs">
                CONTACT US
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
