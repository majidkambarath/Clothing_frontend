import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
export default function Settings() {
  const UserData = useSelector((state) => state.AuthData.authData);
  console.log(UserData.address.length);
  const [primaryAddress, setPrimaryAddress] = useState(null);
  useEffect(() => {
    if (UserData && UserData.address) {
      const filteredAddresses = UserData.address.filter(
        (item) => item.parimay === true
      );
      setPrimaryAddress(
        filteredAddresses.length > 0 ? filteredAddresses[0] : null
      );
    }
  }, [UserData]);
  console.log(primaryAddress);
  return (
    <>
      <div className="h-full  py-20 md:py-0 w-full md:mt-10 ">
        <Breadcrumbs className="bg-transparent ml-[70px] md:hidden flex  ">
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
          <Link className="text-red-500" to={"/settings"}>
            Settings
          </Link>
        </Breadcrumbs>
        <div className="mt-5 md:mt-0">
          <h1 className="font-sans text-[28px] font-bold flex justify-center">
            Settings
          </h1>
          <h1 className="font-sans text-[13px] flex justify-center">
            You can manage your account and subscriptions here
          </h1>
        </div>
        <div className="bg-white md:h-[380px] h-96 md:w-3/4 md:ml-20 mt-7">
          <div className="flex justify-between ">
            <h1 className="font-sans text-md font-semibold py-4 px-4">
              My Details
            </h1>
            <Link to={"/account/editdetails"}>
              <h1 className="font-sans text-sm underline cursor-pointer mr-7 mt-5">
                Edit
              </h1>
            </Link>
          </div>
          <div className="ml-5 mt-4">
            <h1 className="font-sans text-[11px]">Email</h1>
            <h1 className="font-sans text-[13px]">{UserData?.email}</h1>
            <h1 className="font-sans text-[11px] mt-2">FirstName</h1>
            <h1 className="font-sans text-[13px]">{UserData?.firstName}</h1>
            <h1 className="font-sans text-[11px] mt-2">LastName</h1>
            <h1 className="font-sans text-[13px]">{UserData?.lastName}</h1>
            <h1 className="font-sans text-[11px] mt-2">Gender</h1>
            <h1 className="font-sans text-[13px]">{UserData?.gender}</h1>
            <h1 className="font-sans text-[11px] mt-2">Phone</h1>
            <h1 className="font-sans text-[13px]">{UserData?.phoneNumber}</h1>
            <h1 className="font-sans text-[11px] mt-2">ZipCode</h1>
            <h1 className="font-sans text-[13px]">{UserData?.zipCode}</h1>
          </div>
        </div>
        <div className="bg-white md:h-[180px] md:w-3/4 h-44 md:ml-20 mt-7">
          <div className="flex justify-between ">
            <h1 className="font-sans text-md font-semibold py-4 px-4">
              Address Book
            </h1>
            <Link to={"/account/addressbook"}>
              <h1 className="font-sans text-sm underline cursor-pointer mr-7 mt-5">
                Edit
              </h1>
            </Link>
          </div>
          <h1 className="font-sans text-[11px] ml-5 ">
            You can also add and edit delivery addresses here
          </h1>
          {!primaryAddress ? (
            <h1 className="font-sans text-[11px] mt-7 ml-5">
              No home address saved.
            </h1>
          ) : (
            <div className="md:w-1/2">
              <h1 className="font-sans text-[11px] mt-5 ml-5">
                Delivery Address
              </h1>
              <h1 className="font-sans text-[13px] ml-5">
                {primaryAddress?.addressLine1}
              </h1>
              <h1 className="font-sans text-[13px] ml-5">
                {primaryAddress?.addressLine2}
              </h1>
              <h1 className="font-sans text-[13px] ml-5">
                {primaryAddress?.pinCode}
                <span> {primaryAddress?.city} </span>
                <span> {primaryAddress?.state}</span>
              </h1>
            </div>
          )}
        </div>
        <div className="bg-white md:h-[160px] md:w-3/4 h-48 md:ml-20 mt-7">
          <div className="flex justify-between ">
            <h1 className="font-sans text-md font-semibold py-4 px-4">
              Privacy
            </h1>
          </div>
          <h1 className="font-sans text-[13px] mt-2 hover:underline cursor-pointer ml-5">
            Change password
          </h1>
          <div className="">
            <h1 className="font-sans text-[13px]  hover:underline cursor-pointer mt-3 ml-5">
              My privacy portal
            </h1>
            <h1 className="font-sans text-[11px] ml-5">
              On Blnzed privacy portal you can see your personal data across our
              brands and countries. Here you can edit subscriptions, request a
              copy of your data or choose to delete your information.
            </h1>
          </div>
        </div>
        <div className="md:h-20"></div>
      </div>
    </>
  );
}
