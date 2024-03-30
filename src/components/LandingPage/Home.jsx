import React from "react";
import Header from "../../layout/Header/Header";
import CategoriesHeader from "../../layout/Header/CategoriesHeader";
import MainCollection from "./MainCollection/Collection";
import Categories from "./Categories/MainCategories";
import ProductCard from "./ProductCard/CardList";
import ProductList from "./ProductList/ProductList";
import ProductCards from "./ProductList/ProductCards";
import Footer from "../../layout/Footer/Footer";
import RecentView from "./RecentView/RecentView";
import SubHeader from "./SubHeader";
import Banner from "./Banner/MainBanner";
import SubBanner from "./Banner/SubBanner";
export default function LandingPage() {
  return (
    <div className="bg-custom">
      <Header />

      <Banner />

      <div className=" absolute z-20 top-[600px]  md:top-[650px]">
       
        <ProductList />
      
       
        <SubBanner />
        <ProductCards />
        <Footer />
        {/* <CategoriesHeader /> */}
        {/* <SubHeader/> */}
        {/* <MainCollection /> */}
        {/* <Categories/> */}
        {/* <ProductCard/> */}
        {/* <RecentView/> */}
        {/* <ProductList/> */}
      </div>
    </div>
  );
}
