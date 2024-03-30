import React, { useEffect, useState } from "react";
import SubNavbar from "../../layout/Navbar/SubNavbar";
import CustomNavbar from "../../layout/Navbar/CustomNavbar";
import CategoriesHeader from "../../layout/Header/CategoriesHeader";
import { Link, useParams } from "react-router-dom";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import Footer from "../../layout/Footer/Footer";
import product1 from "../../assets/product1.webp";
import product2 from "../../assets/product2.webp";
import product3 from "../../assets/product3.webp";
import product4 from "../../assets/product4.webp";
import product5 from "../../assets/product5.webp";
import product6 from "../../assets/product6.webp";
import product7 from "../../assets/product7.webp";
import product8 from "../../assets/product8.webp";
export default function ProductCard() {
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
  const [productItems, setProductItem] = useState(productData);
  const [fetchData, setFetchData] = useState([]);
  const [hide, setHide] = useState(true);
  const { item } = useParams();
  console.log(item);
  useEffect(() => {
    let filterData;
    if (item === "new-in") {
      filterData = productItems;
      setFetchData(filterData);
    } else {
      filterData = productItems.filter(
        (ele) => ele.category.toLowerCase() === item.toLowerCase()
      );
      setFetchData(filterData);
    }
  }, [item]);
  return (
    <>
      <div className="bg-custom w-full h-full">
        <CustomNavbar />

        <div className=" py-28 md:py-32  ">
          {/* <div className="  md:pt-5 md:hidden block">
            <h1 className="font-sans font-semibold  text-xl px-4 ">
              {item.toUpperCase()}
            </h1>
          </div> */}
          <div className="md:hidden mt-2 px-2  flex justify-between ">
            <h1 className="font-roboto text-xs md:text-[8px]">
              {fetchData.length} PRODUCTS
            </h1>
            <h1
              onClick={() => setHide(!hide)}
              className="font-roboto text-xs md:text-[8px] underline"
            >
              FILTER AND SORT
            </h1>
          </div>
          <div className="md:flex hidden mt-4">
            <div className="flex gap-10 ml-10">
              <h1 className="font-roboto text-xs md:text-[8px]">FILTER </h1>
              <h1 className="font-roboto text-xs md:text-[8px]">
                AVAILABILITY{" "}
              </h1>
              <h1 className="font-roboto text-xs md:text-[8px]">PRICE </h1>
            </div>
            <div className="ml-auto flex gap-10 mr-10">
              <h1 className="font-roboto text-xs md:text-[8px]">SORT BY </h1>
              <h1 className="font-roboto text-xs md:text-[8px]">FEATURED </h1>
              <h1 className="font-roboto text-xs md:text-[8px]">
                {fetchData.length} PRODUCTS
              </h1>
            </div>
          </div>

          <div className="grid px-1 pb-10 relative grid-flow-row-dense md:grid-cols-4 grid-cols-2 gap-1 md:gap-1 md:mt-5 mt-5   ml-1">
            {fetchData.slice(0, 16).map((item, index) => {
              return (
                <Link key={item.id} to={`/details/${item.id}`}>
                  <div
                    key={index}
                    onMouseEnter={(e) => {
                      e.currentTarget.querySelector("img").src =
                        item.imageUrl[1];
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.querySelector("img").src =
                        item.imageUrl[0];
                    }}
                    className="md:h-[435px] cursor-pointer"
                  >
                    {!item.isActive && (
                      <h1 className="absolute md:ml-44 h-8 font-roboto pt-1 font-bold text-white bg-black/45 w-28 pl-3 mt-5">
                        SOLD OUT
                      </h1>
                    )}
                    <img
                      className="md:w-[333px]   object-cover  md:h-[380px] "
                      src={item?.imageUrl[0]}
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
        </div>
        <Footer />
      </div>
    </>
  );
}
