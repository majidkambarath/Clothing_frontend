import React from "react";
import Account from "../../../components/MyAccount/web/Account";
import MyAccount from "../../../components/MyAccount/web/MyAccount";
import Navbar from "../../../layout/Navbar/SubNavbar";
import CategoriesHeader from "../../../layout/Header/CategoriesHeader";
import Footer from '../../../layout/Footer/Footer'
import AccountApp from "../../../components/MyAccount/app/Account";
export default function AccountPage() {
  return (
    <div className="bg-custom ">
    <Navbar/>
    {/* <CategoriesHeader/> */}
    <div className=" md:block hidden">
    <div className="flex  pt-28 px-3">
      <Account />
      <MyAccount/>
    </div>
    </div>
    <div className="block md:hidden px-2">
      <AccountApp />

    
    </div>

    <Footer/>
    </div>
    
  );
}
