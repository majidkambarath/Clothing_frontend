import React from "react";
import Header from "../../layout/Header/Header";
import CustomNavbar from "../../layout/Navbar/CustomNavbar";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import CategoriesHeader from "../../layout/Header/CategoriesHeader";
import SubNavbar from "../../layout/Navbar/SubNavbar";

export default function ProductDetailsPage() {
  return (
    <>
      <div className="bg-custom">
        <CustomNavbar />
        <div className="md:pt-24 pt-10 px-2 ">
            {/* <CategoriesHeader/> */}
            <ProductDetails/>
        </div>
      </div>
    </>
  );
}
