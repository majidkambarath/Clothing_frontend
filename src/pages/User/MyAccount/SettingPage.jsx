import React from "react";
import Account from "../../../components/MyAccount/web/Account";
import Navbar from "../../../layout/Navbar/SubNavbar";
import CategoriesHeader from "../../../layout/Header/CategoriesHeader";
import Footer from "../../../layout/Footer/Footer";
import Settings from "../../../components/MyAccount/web/Settings";
import { Link } from "react-router-dom";
export default function SettingPage() {
  return (
    <div className="bg-custom ">
      <Navbar />
      {/* <CategoriesHeader /> */}

      <div className=" md:block hidden ">
        <div className="flex justify-center  pt-24 ">
          <Link to={"/"}>
            <h1 className="font-roboto text-xs opacity-60 cursor-pointer hover:text-red-500 hover:opacity-100">
              HOME
            </h1>
          </Link>
          <h1 className="font-roboto font-bold text-lg -mt-[6px] ml-2">/</h1>
          <Link to={"/account"}>
            <h1 className="font-roboto text-xs ml-2 opacity-50 cursor-pointer hover:text-red-500 hover:opacity-100 ">
              ACCOUNT
            </h1>
          </Link>
          <h1 className="font-roboto font-bold text-lg -mt-[6px] ml-2">/</h1>
          <h1 className="font-roboto text-xs ml-2 text-red-500 cursor-pointer ">
            SETTINGS
          </h1>
        </div>
        <div className="flex pt-10 px-3">
          <Account />
          <Settings />
        </div>
      </div>
      <div className="block md:hidden  container md:mt-5 md:max-w-screen-2xl mx-auto px-5 sm1:px-11 sm2:px-9 sm:px-9">
      <Settings />
      </div>

      <Footer />
    </div>
  );
}
