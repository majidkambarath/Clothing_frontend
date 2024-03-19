import React from "react";
import Header from "../../layout/Header/Header";
import CategoriesHeader from "./CategoriesHeader";
import MainCollection from "./MainCollection/Collection"
import Categories from "./Categories/MainCategories";
import ProductCard from './ProductCard/CardList'
import ProductList from "./ProductList/ProductList";
import Footer from "../../layout/Footer/Footer";
import RecentView from "./RecentView/RecentView";
export default function LandingPage() {
  return (
    <div className="bg-custom">
      <Header />
      <CategoriesHeader />
      <MainCollection />
      <Categories/>
     <ProductCard/>
     <RecentView/>
     <ProductList/>
     <Footer/>
    </div>
  );


}
