import React from "react";
import Account from "../../../components/MyAccount/web/Account";
import MyAccount from "../../../components/MyAccount/web/MyAccount";
import Navbar from "../../../layout/Navbar/Navbar";
import CategoriesHeader from "../../../components/LandingPage/CategoriesHeader";
import Footer from '../../../layout/Footer/Footer'
import AccountApp from "../../../components/MyAccount/app/Account";
export default function AccountPage() {
  return (
    <div className="bg-custom ">
    <Navbar/>
    <CategoriesHeader/>
    <div className=" md:block hidden">
    <div className="flex container md:mt-5 md:max-w-screen-2xl mx-auto px-6 sm1:px-11 sm2:px-9 sm:px-9">
      <Account />
      <MyAccount/>
    </div>
    </div>
    <div className="block md:hidden  container md:mt-5 md:max-w-screen-2xl mx-auto px-5 sm1:px-11 sm2:px-9 sm:px-9">
      <AccountApp />

    
    </div>

    <Footer/>
    </div>
    
  );
}
