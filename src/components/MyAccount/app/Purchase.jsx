import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Purchases from "../web/Purchases";
export default function Purchase() {
  return (
    <>
      <div className="h-full py-20 w-full">
        <Breadcrumbs className="bg-transparent ml-[70px]   ">
          <Link to={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <Link className="opacity-60" to={"/account"}>
            Account
          </Link>
          <Link className="text-red-500" to={"/account"}>
            Purchase
          </Link>
        </Breadcrumbs>
        <h1 className='font-sans text-2xl mt-5 flex  underline justify-center font-semibold'>My purchases</h1>
           <div>
            <Purchases/>

           </div>
        
      </div>
    </>
  );
}
