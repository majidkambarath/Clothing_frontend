import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { BiMessageMinus } from "react-icons/bi";
import { LuPenSquare } from "react-icons/lu";
import { IoOpenOutline } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
export default function Account() {
  return (
    <>
      <div className="bg-custom w-1/2 h-[500px]">
        <div className=" flex justify-between w-full">
          <h1 className="font-sans font-bold px-4 py-4 text-xl text-black/60 ">
            Hi Member
          </h1>
          <h1 className="text-3xl px-4 py-4">
            <IoSettingsOutline />
          </h1>
        </div>
        <div>
          <div className="bg-white h-16 flex mt-10  hover:text-red-500 hover:underline cursor-pointer justify-between">
            <div className="flex ">
              <h1 className="font-sans text-black/60  text-2xl py-5 px-4" >
                <PiShoppingBagOpenThin />
              </h1>
              <h1 className="font-sans py-5 font-semibold text-sm">My purchases</h1>
            </div>
            <div>
                <h1 className="text-sm text-black py-6 mr-5"><SlArrowRight/></h1>
            </div>
          </div>
          <div className="bg-custom h-16  hover:text-red-500 hover:underline cursor-pointer flex  justify-between">
            <div className="flex ">
              <h1 className="font-sans text-black/60 text-2xl py-5 px-4" >
                <IoSettingsOutline />
              </h1>
              <h1 className="font-sans py-5 font-semibold  text-sm">Account settings</h1>
            </div>
            <div>
                <h1 className="text-sm text-black py-6 mr-5"><SlArrowRight/></h1>
            </div>
          </div>
          <div className="bg-white h-16  hover:text-red-500 hover:underline cursor-pointer flex  justify-between">
            <div className="flex ">
              <h1 className="font-sans text-black/60  text-2xl py-5 px-4" >
                <BiMessageMinus />
              </h1>
              <h1 className="font-sans py-5 font-semibold text-sm">Contact us</h1>
            </div>
            <div>
                <h1 className="text-sm py-6 text-black mr-5"><SlArrowRight/></h1>
            </div>
          </div>
          <div className="bg-custom h-16  hover:text-red-500 hover:underline cursor-pointer flex  justify-between">
            <div className="flex ">
              <h1 className="font-sans text-black/60  text-2xl py-5 px-4" >
                <IoOpenOutline />
              </h1>
              <h1 className="font-sans py-5 font-semibold text-sm">Sign out</h1>
            </div>
            <div>
                <h1 className="text-sm py-6 text-black mr-5"><SlArrowRight/></h1>
            </div>
          </div>
          <div className="bg-white h-16  hover:text-red-500 hover:underline cursor-pointer flex  justify-between">
            <div className="flex ">
              <h1 className="font-sans text-black/60  text-2xl py-5 px-4" >
                <LuPenSquare />
              </h1>
              <h1 className="font-sans py-5 font-semibold text-sm">Help us improve</h1>
            </div>
            <div>
                <h1 className="text-sm py-6 text-black mr-5"><SlArrowRight/></h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
