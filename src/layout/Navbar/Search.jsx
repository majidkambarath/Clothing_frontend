import React from "react";
import { LuSearch } from "react-icons/lu";
export default function Search() {
  return (
    <>
      <div className=" py-4  h-12 border-b-2 border-black flex">
        <LuSearch className="cursor-pointer text-xl" />
        <input
          className=" outline-none  bg-custom placeholder-black font-sans placeholder pl-4"
          placeholder="Search"
          type="text"
        />
      </div>
    </>
  );
}
