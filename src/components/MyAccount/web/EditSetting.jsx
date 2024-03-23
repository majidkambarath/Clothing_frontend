import React from "react";
import { Link } from "react-router-dom";
import UserDetails from "../Forms/UserDetails";
import { Breadcrumbs } from "@material-tailwind/react";
export default function EditSetting() {
  return (
    <>
      <div className="w-full py-20 md:py-0 h-full">
      <Breadcrumbs className=" bg-transparent ml-[30px] md:hidden flex  ">
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
          <Link className="opacity-60" to={"/settings"}>
            Settings
          </Link>
          <Link className="text-red-500" to={"/account/editdetails/"}>
            Edit details
          </Link>
        </Breadcrumbs>
        <h1 className="font-roboto text-xl mt-4 md:mt-4 md:text-[28px] font-semibold flex justify-center">
          EDIT MY DETAILS
        </h1>
        <div className="bg-white  md:h-[750px] h-[720px] md:w-3/4 md:ml-20 mt-7">
          <div className=" ml-3">
            <h1 className="font-sans text-[16px] font-semibold py-5 px-5">
              My details
            </h1>

            <UserDetails />
          </div>
        </div>
        <div className="md:h-20"></div>
      </div>
    </>
  );
}
