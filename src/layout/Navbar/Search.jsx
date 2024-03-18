import React from "react";
import { LuSearch } from "react-icons/lu";
export default function Search() {
  return (
    <>
      <div className=" py-3  h-10 border-b-[1px] border-black flex">
        <LuSearch className="cursor-pointer text-xl" />
        <input
          className=" outline-none bg-custom placeholder-black text-xs font-roboto placeholder pl-4 "
          placeholder="SEARCH"
          type="text"
        />
      </div>
    </>
  );
}
