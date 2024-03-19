import React from "react";
import { NavLink } from "react-router-dom";
import { IoAlertCircleOutline } from "react-icons/io5";
export default function SubHeader() {
  return (
    <>
      <div className="md:block hidden">
        <ul className="flex justify-evenly mt-7">
          <li className="font-sans text-xs font-bold">
            ESTIMATED DELIVERY TIME: 2-7 DAYS
          </li>
          <NavLink to={"/register"}>
            <li className="font-sans text-xs font-bold">
              BECOME A BLNZED MEMBER
            </li>
          </NavLink>

          <li className="font-sans text-xs font-bold">
            FREE & FLEXIBLE 15 DAYS RETURN
          </li>
        </ul>
      </div>
      <div className="md:pt-10 pt-24 ">
        <h1 className="font-sans text-xs  font-bold md:hidden flex justify-center ">  ESTIMATED DELIVERY TIME: 2-7 DAYS</h1>
        <div className="bg-Ylate md:h-20 h-24 mt-7 md:mt-0 w-full container max-w-screen-lg mx-auto flex  ">
            <div className="md:ml-[350px] ml-16  md:w-1/2 w-[400px]">
                <h1 className="font-sans text-[15px] md:text-lg font-bold md:mt-5 mt-8 text-red-500">FRESH DEALS: UP TO 30% OFF</h1>
                <h1 className="font-sans text-[10px] ml-12 md:ml-20">SPRING HAS SPRUNG!</h1>
            </div>
            <h1 className="font-sans text-2xl md:mt-6 mt-8 md:pl-28 md:mr-0 mr-5   text-black/30"><IoAlertCircleOutline/></h1>
        </div>
      </div>
    </>
  );
}
