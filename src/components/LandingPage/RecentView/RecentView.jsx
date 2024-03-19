import React from "react";
import "../RecentView/View.css";
import product1 from "../../../assets/product1.webp";
import product2 from "../../../assets/product2.webp";
import product3 from "../../../assets/product3.webp";
import product4 from "../../../assets/product4.webp";
import product5 from "../../../assets/product5.webp";
import product6 from "../../../assets/product6.webp";
import { GrFavorite } from "react-icons/gr";
export default function RecentView() {
  const productData = [
    {
      imageUrl: product1,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 5000,
      price: 3500,
    },
    {
      imageUrl: product2,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 4000,
      price: 2500,
    },
    {
      imageUrl: product3,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 6000,
      price: 4500,
    },
    {
      imageUrl: product4,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 5990,
      price: 3499,
    },
    {
      imageUrl: product5,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 6000,
      price: 4999,
    },
    {
      imageUrl: product6,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 8000,
      price: 4999,
    },
  ];
  return (
    <>
      <div className="md:h-[410px] w-[345px] md:w-full h-[420px] bg-custom ">
        <h1 className="font-roboto md:text-xl  font-bold text-gray-500 ">
          RECENTLY VIEWED
        </h1>
        <div className="wapperDiv  -ml-[1px] md:-ml-0 gap-5 md:mt-8 mt-5  ">
          {productData.map((item) => {
            return (
              <div className="itemDiv  min-w-[200px] md:h-[435px] ">
                <h1 className="absolute ml-40 font-sans mt-3 text-2xl">
                  <GrFavorite />
                </h1>
                <img className=" " src={item.imageUrl} alt="RecentlyView" />
                <h1 className="text-xs font-sans mt-2 font-bold">
                  DUTCH BLU GARLAND T-SHIRT
                </h1>
                <h1 className="text-xs font-sans text-gray-500  font-bold">
                  RS. {item.price}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
