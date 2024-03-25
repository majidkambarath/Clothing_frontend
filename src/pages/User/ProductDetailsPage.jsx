import React from "react";
import Header from "../../layout/Header/Header";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import CategoriesHeader from "../../layout/Header/CategoriesHeader";

export default function ProductDetailsPage() {
  return (
    <>
      <div className="bg-custom">
        <Header />
        <div className="container md:max-w-screen-2xl mx-auto px-6 sm1:px-11 sm2:px-9 sm:px-9 ">
            <CategoriesHeader/>
            <ProductDetails/>
        </div>
      </div>
    </>
  );
}
