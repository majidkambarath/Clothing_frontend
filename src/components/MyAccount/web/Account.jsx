import React from "react";
import SideBar from "./SideBar";

export default function Account() {
  return (
    <>
      <div className="bg-custom md:w-1/2 md:h-[500px]">
        <div className=" flex justify-between w-full">
          <h1 className="font-sans font-bold px-4 py-4 text-xl text-black/60 ">
            Hi Member
          </h1>
        </div>
       <SideBar/>
      </div>
    </>
  );
}
