import React from "react";
import Account from "../../components/MyAccount/Account";
import Purchases from "../../components/MyAccount/Purchases";
import Navbar from "../../layout/Navbar/Navbar";
import CategoriesHeader from "../../components/LandingPage/CategoriesHeader";
export default function AccountPage() {

  return (
    <div className="bg-custom ">
    <Navbar/>
    <CategoriesHeader/>
    <div className="flex container md:mt-5 md:max-w-screen-2xl mx-auto px-6 sm1:px-11 sm2:px-9 sm:px-9">
      <Account />
      <Purchases/>
    </div>
    </div>
    
  );
}
