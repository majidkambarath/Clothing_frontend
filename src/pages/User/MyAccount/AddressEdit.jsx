import React from "react";
import Account from "../../../components/MyAccount/web/Account";
import Navbar from "../../../layout/Navbar/Navbar";
import CategoriesHeader from "../../../components/LandingPage/CategoriesHeader";
import Footer from "../../../layout/Footer/Footer";
import AddressEdit from "../../../components/MyAccount/web/AddressEdit";
import { Link } from "react-router-dom";
export default function AddressEditPage() {
  return (
    <div className="bg-custom ">
      <Navbar />
      <CategoriesHeader />

      <div className=" md:block hidden">
        <div className="flex justify-center mt-6 ">
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
          <Link to={"/settings"}>
          <h1 className="font-roboto text-xs ml-2 opacity-50 cursor-pointer ">
            SETTINGS
          </h1>
          </Link>
          <h1 className="font-roboto font-bold text-lg -mt-[6px] ml-2">/</h1>
          <h1 className="font-roboto text-xs ml-2 text-red-500 cursor-pointer ">
            ADDRESS BOOK
          </h1>
        </div>
        <div className="flex container md:mt-5 md:max-w-screen-2xl mx-auto px-6 sm1:px-11 sm2:px-9 sm:px-9">
          <Account />
          <AddressEdit />
        </div>
      </div>
      <div className="block md:hidden  container md:mt-5 md:max-w-screen-2xl mx-auto px-5 sm1:px-11 sm2:px-9 sm:px-9">
      <AddressEdit />
      </div>

      <Footer />
    </div>
  );
}
