import React from "react";
import product1 from "../../../assets/product1.webp";
import product2 from "../../../assets/product2.webp";
import product3 from "../../../assets/product3.webp";
import product4 from "../../../assets/product4.webp";
import product5 from "../../../assets/product5.webp";
import product6 from "../../../assets/product6.webp";
import product7 from "../../../assets/product7.webp";
import product8 from "../../../assets/product8.webp";
import "../ProductCard/Card.css";
import { MdFavoriteBorder } from "react-icons/md";
export default function CardList() {
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
    {
      imageUrl: product7,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 7000,
      price: 6999,
    },
    {
      imageUrl: product8,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 8000,
      price: 7999,
    },
  ];
  return (
    <>
      <div className="w-full -mt-7 md:-mt-0 md:h-[500px] h-[450px] bg-custom flex md:flex-row flex-col">
        <div className="md:w-1/4  w-[345px]">
          <h1 className="text-2xl font-roboto font-semibold text-gray-500 mt-5 flex justify-center md:mt-52 ">
            NEW ARRIVALS
          </h1>
        </div>
        <div className="md:w-3/4 w-[345px]  -ml-[1px]  wapperDiv md:mt-12 mt-5 gap-3 ">
          {productData.map((item) => {
            return (
              <div className="itemDiv cursor-pointer md:min-w-[333px] min-w-[205px] md:h-[435px] ">
                <img
                  className="md:w-[333px] w-[200px] md:h-[380px] "
                  src={item.imageUrl}
                  alt="productCardImage"
                />
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
