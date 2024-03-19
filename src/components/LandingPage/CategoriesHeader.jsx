import React from "react";
import Search from "../../layout/Navbar/Search";
export default function CategoriesHeader() {
  return (
    <>
      <div className="md:block hidden container mx-auto max-w-screen-2xl bg-custom mt-5  ">
        <div className=" w-full h-14 px-10 flex justify-between">
          <div className="ml-32" >
            <ul className="flex gap-10">
              <li className="font-roboto cursor-pointer text-xs py-4">MEN</li>
              <li className="font-roboto cursor-pointer text-xs py-4">WOMEN</li>
              <li className="font-roboto cursor-pointer text-xs py-4">NEW IN</li>
              <li className="font-roboto cursor-pointer text-xs py-4">T SHIRT</li>
              <li className="font-roboto cursor-pointer text-xs py-4">OVERSIZED T SHIRT</li>
              <li className="font-roboto cursor-pointer text-xs py-4">MEN BASICS</li>
              <li className="font-roboto cursor-pointer text-xs py-4">WOMENS BASICS</li>
              </ul>
          </div>
          <div className="mr-10">
            <Search/>
          </div>
        </div>
      </div>
    </>
  );
}
