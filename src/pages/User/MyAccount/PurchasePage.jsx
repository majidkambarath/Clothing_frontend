import React from "react";
import Account from "../../../components/MyAccount/web/Account";
import Navbar from "../../../layout/Navbar/SubNavbar";
import CategoriesHeader from "../../../layout/Header/CategoriesHeader";
import Footer from "../../../layout/Footer/Footer";
import PurchasesHead from "../../../components/MyAccount/web/PurchasesHead";
import PurchaseApp from "../../../components/MyAccount/app/Purchase";
import { Link } from "react-router-dom";
export default function PurchasePage() {
  return (
    <div className="bg-custom ">
      <Navbar />
      {/* <CategoriesHeader /> */}
      <div className=" md:block hidden pt-24">
        <div className="flex justify-center  ">
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
            PURCHASES
          </h1>
        </div>
      </div>
      <div className=" md:block hidden ">
        <div className="flex pt-16 px-3">
          <Account />
          <PurchasesHead />
        </div>
      </div>
      <div className="block md:hidden px-2 ">
        <PurchaseApp />
      </div>

      <Footer />
    </div>
  );
}
