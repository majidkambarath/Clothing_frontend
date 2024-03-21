import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { BiMessageMinus } from "react-icons/bi";
import { LuPenSquare } from "react-icons/lu";
import { IoOpenOutline } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import { NavLink } from "react-router-dom";
export default function SideBar() {
  return (
    <>
      <div>
        <NavLink to={"/purchase"}>
          <div className="bg-white h-14 flex mt-10  hover:text-red-500 hover:underline cursor-pointer justify-between">
            <div className="flex ">
              <h1 className="font-sans text-black/60  text-2xl py-4 px-4">
                <PiShoppingBagOpenThin />
              </h1>
              <h1 className="font-sans py-5 font-semibold text-xs">
                My purchases
              </h1>
            </div>
            <div>
              <h1 className="text-sm text-black py-5 mr-5">
                <SlArrowRight />
              </h1>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/settings"}>
          <div className="bg-custom h-14  hover:text-red-500 hover:underline cursor-pointer flex  justify-between">
            <div className="flex ">
              <h1 className="font-sans text-black/60 text-2xl py-4 px-4">
                <IoSettingsOutline />
              </h1>
              <h1 className="font-sans py-5 font-semibold  text-xs">
                Account settings
              </h1>
            </div>
            <div>
              <h1 className="text-sm text-black py-5 mr-5">
                <SlArrowRight />
              </h1>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/Contact"}>
          <div className="bg-white h-14  hover:text-red-500 hover:underline cursor-pointer flex  justify-between">
            <div className="flex ">
              <h1 className="font-sans text-black/60  text-2xl py-4 px-4">
                <BiMessageMinus />
              </h1>
              <h1 className="font-sans py-5 font-semibold text-xs">
                Contact us
              </h1>
            </div>
            <div>
              <h1 className="text-sm py-5 text-black mr-5">
                <SlArrowRight />
              </h1>
            </div>
          </div>
        </NavLink>
        <div className="bg-custom h-14  hover:text-red-500 hover:underline cursor-pointer flex  justify-between">
          <div className="flex ">
            <h1 className="font-sans text-black/60  text-2xl py-4 px-4">
              <IoOpenOutline />
            </h1>
            <h1 className="font-sans py-5 font-semibold text-xs">Sign out</h1>
          </div>
          <div>
            <h1 className="text-sm py-5 text-black mr-5">
              <SlArrowRight />
            </h1>
          </div>
        </div>
        <NavLink to={"/help"}>
          <div className="bg-white h-14  hover:text-red-500 hover:underline cursor-pointer flex  justify-between">
            <div className="flex ">
              <h1 className="font-sans text-black/60  text-2xl py-4 px-4">
                <LuPenSquare />
              </h1>
              <h1 className="font-sans py-5 font-semibold text-xs">
                Help us improve
              </h1>
            </div>
            <div>
              <h1 className="text-sm py-5 text-black mr-5">
                <SlArrowRight />
              </h1>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
}
