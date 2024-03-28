import React from "react";
import Header from "../../layout/Header/Header";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import CategoriesHeader from "../../layout/Header/CategoriesHeader";
import SubNavbar from "../../layout/Navbar/SubNavbar";

export default function ProductDetailsPage() {
  return (
    <>
      <div className="bg-custom">
        <SubNavbar />
        <div className="container md:pt-20   md:max-w-screen-2xl mx-auto px-6 sm1:px-11 sm2:px-9 sm:px-9 ">
            {/* <CategoriesHeader/> */}
            <ProductDetails/>
        </div>
      </div>
    </>
  );
}
