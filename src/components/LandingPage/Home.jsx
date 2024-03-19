import React from "react";
import Header from "../../layout/Header/Header";
import CategoriesHeader from "./CategoriesHeader";
import MainCollection from "./MainCollection/Collection"
import Categories from "./Categories/MainCategories";
import ProductCard from './ProductCard/CardList'
import ProductList from "./ProductList/ProductList";
import Footer from "../../layout/Footer/Footer";
import RecentView from "./RecentView/RecentView";
import SubHeader from "./SubHeader";
export default function LandingPage() {
  return (
    <div className="bg-custom">
      <Header />
      <div className="container md:max-w-screen-2xl mx-auto px-6 sm1:px-11 sm2:px-9 sm:px-9 ">
      <CategoriesHeader />
      <SubHeader/>
      <MainCollection />
      {/* <Categories/> */}
     <ProductCard/>
     <RecentView/>
     <ProductList/>
      </div>
     <Footer/>
    </div>
  );


}
