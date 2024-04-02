import React from "react";
import Search from "../Navbar/Search";
import { Link } from "react-router-dom";
export default function CategoriesHeader() {
  return (
    <>
      <div className=" z-30 fixed md:top-[80px] top-16  border-y-[1px] border-black/30 w-full  container mx-auto max-w-screen-2xl bg-white h-9    ">
        <div className=" w-full h-14 ">
          <div className="md:ml-32 ">
            <ul className="flex md:justify-around justify-evenly gap-3 ml-5 md:ml-0   ">
              <Link to="/product/men">
                <li className="font-roboto cursor-pointer text-[9px] font-bold py-[10px]">MEN</li>
              </Link>
              <Link to="/product/women">
                <li className="font-roboto cursor-pointer md:block hidden  text-[9px] font-bold py-[10px]">
                  WOMEN
                </li>
              </Link>
              <Link to="/product/new-in">
                <li className="font-roboto cursor-pointer text-[9px] font-bold py-[10px]">
                  NEW IN
                </li>
              </Link>
              <Link to="/product/t-shirt">
                <li className="font-roboto cursor-pointer text-[9px] font-bold py-[10px]">
                  T SHIRT
                </li>
              </Link>
              <Link to="/product/oversized-t-shirt">
                <li className="font-roboto cursor-pointer text-[9px] font-bold py-[10px]">
                  OVERSIZED T SHIRT
                </li>
              </Link>
              <Link to="/product/men-basics">
                <li className="font-roboto cursor-pointer text-[9px] font-bold py-[10px]">
                  MEN BASICS
                </li>
              </Link>
              <Link to="/product/womens-basics">
                <li className="font-roboto md:block hidden  cursor-pointer text-[9px] font-bold py-[10px]">
                  WOMENS BASICS
                </li>
              </Link>
            </ul>
          </div>
          
        </div>
      </div>
    </>
  );
}
