import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { PiShoppingBagOpenThin } from "react-icons/pi";
import { BiMessageMinus } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import Offers from "../web/Offers";
import SideBar from "../web/SideBar";
import { NavLink } from "react-router-dom";
export default function Account() {
  return (
    <div className=" py-20 h-full w-full ">
      {/* <div className="bg-Ylate w-full h-[130px] ">
        <h1 className="font-roboto text-xs flex justify-end py-2 text-red-400 mr-3 font-semibold">
          BLNZED MEMBER
        </h1> */}
        {/* <div className="mt-3">
          <h1 className="font-roboto font-semibold text-sm flex justify-center">HELLO AND WELCOME!</h1>
          <h1 className="font-roboto font-semibold text-xs ml-16"> HAPPY SHOPPING WITH <span className="text-red-400 font-roboto font-semibold text-xs">BLNZED!</span></h1>
        </div> */}
        {/* <h1 className="font-roboto font-semibold ml-5 mt-3 text-black ">
          HELLO ABCD
        </h1>
        <h1 className="font-roboto text-xs mt-2 font-semibold ml-5 m">
          <span className="text-red-400">BLNZED </span>: MAKING EVERY OUTFIT
          UNFORGETTABLE.
        </h1>
      </div> */}
      <div className=" px-2 h-36 w-full   grid grid-flow-row-dense grid-cols-2  ">
        <NavLink to={"/"}>
          <div className="bg-white h-12 w-44 flex pl-9  ">
            <h1 className="text-3xl  text-black/50  py-2 ml-2">
              <AiOutlineHome />
            </h1>
            <h1 className="font-sans text-xs py-4 font-semibold ml-2">HOME</h1>
          </div>
        </NavLink>
        <NavLink to={"/purchase"}>
          <div className="bg-white ml-1 h-12 w-44 pl-4 flex  ">
            <h1 className="text-3xl  text-black/50  py-2 ml-2">
              <PiShoppingBagOpenThin />
            </h1>
            <h1 className="font-san text-xs py-4  font-semibold ml-2">
              MY PURCHASES
            </h1>
          </div>
        </NavLink>
        <NavLink to={"/settings"}>
          <div className="bg-white h-12 -mt-5 w-44 flex  ">
            <h1 className="text-3xl  text-black/50 pl-7 py-2 ml-2">
              <IoSettingsOutline />
            </h1>
            <h1 className="font-sans text-xs py-4 font-semibold ml-2">
              SETTINGS
            </h1>
          </div>
        </NavLink>
        <NavLink to={"/contact"}>
          <div className="bg-white h-12 ml-1 -mt-5 w-44 flex  ">
            <h1 className="text-3xl  text-black/50 pl-7  py-2 ml-2">
              <BiMessageMinus />
            </h1>
            <h1 className="font-sans text-xs py-4 font-semibold ml-2">
              CONTACT US
            </h1>
          </div>
        </NavLink>
      </div>
      <div className="-mt-4 ">
        <Offers />
      </div>
      <div className="-mt-20 px-2">
        <SideBar />
      </div>
    </div>
  );
}
