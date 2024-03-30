import React from "react";
import product1 from "../../../assets/product1.webp";
import product2 from "../../../assets/product2.webp";
import product3 from "../../../assets/product3.webp";
import product4 from "../../../assets/product4.webp";
import product5 from "../../../assets/product5.webp";
import product6 from "../../../assets/product6.webp";
import product7 from "../../../assets/product7.webp";
import product8 from "../../../assets/product8.webp";
import { Link } from "react-router-dom";
export default function ProductCards() {
  const productData = [
    {
      id: 1,
      imageUrl: [product1, product2],
      category: "men",
      isActive: true,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 5000,
      price: 3500,
    },
    {
      id: 2,
      imageUrl: [product2, product3],
      category: "men",
      isActive: true,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 4000,
      price: 2500,
    },
    {
      id: 3,
      imageUrl: [product3, product4],
      category: "men",
      isActive: true,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 6000,
      price: 4500,
    },
    {
      id: 4,
      imageUrl: [product5, product6],
      category: "women",
      isActive: false,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 5990,
      price: 3499,
    },
    {
      id: 5,
      imageUrl: [product7, product8],
      category: "women",
      isActive: true,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 6000,
      price: 4999,
    },
    {
      id: 6,
      imageUrl: [product4, product5],
      category: "women",
      isActive: false,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 8000,
      price: 4999,
    },
    {
      id: 7,
      imageUrl: [product5, product7],
      category: "women",
      isActive: true,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 7000,
      price: 6999,
    },
    {
      id: 8,
      imageUrl: [product8, product2],
      category: "men",
      isActive: true,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 8000,
      price: 7999,
    },
    {
      id: 9,
      imageUrl: [product7, product8],
      category: "women",
      isActive: false,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 6000,
      price: 4999,
    },
    {
      id: 10,
      imageUrl: [product4, product5],
      category: "men",
      isActive: false,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 8000,
      price: 4999,
    },
    {
      id: 11,
      imageUrl: [product5, product7],
      category: "women",
      isActive: true,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 7000,
      price: 6999,
    },
    {
      id: 12,
      imageUrl: [product8, product2],
      category: "t-shirt",
      isActive: true,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 8000,
      price: 7999,
    },
    {
      id: 13,
      imageUrl: [product8, product2],
      category: "t-shirt",
      isActive: false,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 8000,
      price: 7999,
    },
    {
      id: 14,
      imageUrl: [product7, product8],
      category: "t-shirt",
      isActive: true,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 6000,
      price: 4999,
    },
    {
      id: 15,
      imageUrl: [product4, product5],
      category: "t-shirt",
      isActive: false,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 8000,
      price: 4999,
    },
    {
      id: 16,
      imageUrl: [product5, product7],
      category: "t-shirt",
      isActive: true,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 7000,
      price: 6999,
    },
    {
      id: 17,
      imageUrl: [product8, product2],
      category: "t-shirt",
      isActive: false,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 8000,
      price: 7999,
    },
  ];
  return (
    <div className=" pt-10 bg-custom   w-full md:w-full h-full  ">
      <div className="flex justify-between md:px-3 md:ml-0 px-1 ml-1">
        <h1 className="font-roboto md:font-bold  text-[10px]">
          MORE FROM BLNZED
        </h1>
        <Link to={"/product/new-in"}>
          <button className="bg-white md:-mr-2 md:pl-1 pl-2  mr-1 text-[10px] font-roboto   h-6 w-24 md:h-6 md:w-28">
            SHOP ALL
          </button>
        </Link>
      </div>
      <div className="grid md:px-1 px-1 md:mr-0 mr-1  bg-custom grid-flow-row-dense md:grid-cols-4 grid-cols-2 gap-1 md:gap-1 mt-4  ml-1">
        {productData.slice(0, 8).map((item, index) => {
          return (
            <Link key={item.id} to={`/details/${item.id}`}>
              <div key={index} className="md:h-[435px] cursor-pointer">
                <img
                  className="md:w-[333px] w-[400px] object-cover  md:h-[380px] "
                  src={item.imageUrl[0]}
                  alt="productCardImage"
                />
                <h1 className="text-[9px] font-sans mt-2 md:font-bold">
                  DUTCH BLU GARLAND T-SHIRT
                </h1>
                <h1 className="text-[9px] font-sans text-gray-500  font-bold">
                  RS. {item.price}
                </h1>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="flex bg-custom justify-center h-[100px]">
        <button className="text-[9px] font-roboto h-7 w-32 md:w-36 border t  border-black/65 mt-5 hover:bg-black hover:text-white hover:rounded-2xl ">
          DISCOVER MORE
        </button>
      </div>
    </div>
  );
}
