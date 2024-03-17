import React from "react";
import Header from "../../layout/Header/Header";
import CustomCarousel from "./CustomCarousel";
import MainCollection from "./MainCollection/Collection"
import Categories from "./Categories/MainCategories";
import ProductCard from './ProductCard/CardList'
import ProductList from "./ProductList/ProductList";
import Footer from "../../layout/Footer/Footer";
export default function LandingPage() {
  return (
    <>
      <Header />
      <CustomCarousel />
      <MainCollection />
     <Categories/>
     <ProductCard/>
     <ProductList/>
     <Footer/>
    </>
  );


}
