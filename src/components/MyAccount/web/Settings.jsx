import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAuthDataStore } from "../../../store/reducer/AuthDetails";
export default function Settings() {
  const dispatch = useDispatch();
  const UserData = {
    email: "shahabas@gmail.com",
    firstName: "Shahabas",
    lastName: "",
    phoneNumber: "123-456-7890",
    gender: "Male",
    zipCode: "12345",
  };
  // const AuthData = useSelector((state) => state.AuthData.authData);
  // console.log(AuthData)
  
  return (
    <>
      <div className="h-[600px] w-full mt-10">
        <div>
          <h1 className="font-sans text-[28px] font-bold flex justify-center">
            Settings
          </h1>
          <h1 className="font-sans text-[13px] flex justify-center">
            You can manage your account and subscriptions here
          </h1>
        </div>
        <div className="bg-white h-[380px] w-3/4 ml-20 mt-7">
          <div className="flex justify-between ">
            <h1 className="font-sans text-md font-semibold py-4 px-4">
              My Details
            </h1>
            <h1 className="font-sans text-sm underline cursor-pointer mr-7 mt-5">
              Edit
            </h1>
          </div>
          <div className="ml-5 mt-4">
            <h1 className="font-sans text-[11px]">Email</h1>
            <h1 className="font-sans text-[13px]">{UserData.email}</h1>
            <h1 className="font-sans text-[11px] mt-2">FirstName</h1>
            <h1 className="font-sans text-[13px]">{UserData.firstName}</h1>
            <h1 className="font-sans text-[11px] mt-2">LastName</h1>
            <h1 className="font-sans text-[13px]">{UserData.lastName}</h1>
            <h1 className="font-sans text-[11px] mt-2">Gender</h1>
            <h1 className="font-sans text-[13px]">{UserData.gender}</h1>
            <h1 className="font-sans text-[11px] mt-2">Phone</h1>
            <h1 className="font-sans text-[13px]">{UserData.phoneNumber}</h1>
            <h1 className="font-sans text-[11px] mt-2">ZipCode</h1>
            <h1 className="font-sans text-[13px]">{UserData.zipCode}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
