import React, { useEffect, useRef, useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import product1 from "../../assets/product1.webp";
import product2 from "../../assets/product2.webp";
import product3 from "../../assets/product3.webp";
import product4 from "../../assets/product4.webp";
import product5 from "../../assets/product5.webp";
import product6 from "../../assets/product6.webp";
import product7 from "../../assets/product7.webp";
import product8 from "../../assets/product8.webp";
import { IoAlertCircleOutline } from "react-icons/io5";
import RecentView from "../LandingPage/RecentView/RecentView";
import Footer from "../../layout/Footer/Footer";
import "./product.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/reducer/CartStore";
import toast from "react-hot-toast";
export default function ProductDetails() {
  const cartData = useSelector((state) => state.cart.carts);
  console.log(cartData);
  const productData = [
    {
      id: 1,
      imageUrl: [product1, product2, product1, product2],
      category: "men",
      isActive: true,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 5000,
      price: 3500,
    },
    {
      id: 2,
      imageUrl: [product2, product3, product1, product2],
      category: "men",
      isActive: true,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 4000,
      price: 2500,
    },
    {
      id: 3,
      imageUrl: [product3, product4, product3, product4],
      category: "men",
      isActive: true,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 6000,
      price: 4500,
    },
    {
      id: 4,
      imageUrl: [product5, product6, product3, product4],
      category: "women",
      isActive: false,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 5990,
      price: 3499,
    },
    {
      id: 5,
      imageUrl: [product7, product8, product3, product4],
      category: "women",
      isActive: true,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 6000,
      price: 4999,
    },
    {
      id: 6,
      imageUrl: [product4, product5, product7, product8],
      category: "women",
      isActive: false,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 8000,
      price: 4999,
    },
    {
      id: 7,
      imageUrl: [product5, product7, product5, product6],
      category: "women",
      isActive: true,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 7000,
      price: 6999,
    },
    {
      id: 8,
      imageUrl: [product8, product2, product5, product6],
      category: "men",
      isActive: true,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 8000,
      price: 7999,
    },
    {
      id: 9,
      imageUrl: [product7, product8, product5, product6],
      category: "women",
      isActive: false,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 6000,
      price: 4999,
    },
    {
      id: 10,
      imageUrl: [product4, product5, product8, product2],
      category: "men",
      isActive: false,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 8000,
      price: 4999,
    },
    {
      id: 11,
      imageUrl: [product5, product7, product8, product2],
      category: "women",
      isActive: true,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 7000,
      price: 6999,
    },
    {
      id: 12,
      imageUrl: [product8, product2, product5, product7],
      category: "t-shirt",
      isActive: true,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 8000,
      price: 7999,
    },
    {
      id: 13,
      imageUrl: [product8, product2, product8, product2],
      category: "t-shirt",
      isActive: false,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 8000,
      price: 7999,
    },
    {
      id: 14,
      imageUrl: [product7, product8, product5, product7],
      category: "t-shirt",
      isActive: true,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 6000,
      price: 4999,
    },
    {
      id: 15,
      imageUrl: [product4, product5, product8, product2],
      category: "t-shirt",
      isActive: false,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 8000,
      price: 4999,
    },
    {
      id: 16,
      imageUrl: [product5, product7, product5, product7],
      category: "t-shirt",
      isActive: true,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 7000,
      price: 6999,
    },
    {
      id: 17,
      imageUrl: [product8, product2, product4, product5],
      category: "t-shirt",
      isActive: false,
      title: "DUTCH BLU GARLAND T-SHIRT",
      dicprice: 8000,
      price: 7999,
    },
  ];

  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const { id } = useParams();
  const ID = +id;
  const [productDetails, setProductDetails] = useState({});
  useEffect(() => {
    const filter = productData.filter((ele) => ele.id === ID);
    setProductDetails(filter.length > 0 ? filter[0] : {});
  }, [id]);
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = (item) => {
    console.log(item);
    dispatch(
      addItem({ id: item.id, item: item, quantity: 1, size: selectedSize })
    );
    console.log("ss");
    toast.success("Added to the cart!");
  };
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the div
      divRef.current.focus(); // Focus on the div
    }
  }, []);
  return (
    <>
      <div
        ref={divRef}
        tabIndex={0}
        className=" h-full w-full py-20 md:py-10  md:flex"
      >
        <div className="warapper md:hidden  gap-2">
          {productDetails.imageUrl?.map((item, index) => {
            return (
              <img
                key={index}
                className="md:w-[850px] w-[300px] h-full object-cover"
                src={item}
                alt="DetailsProduct"
              />
            );
          })}
        </div>
        <div className="md:grid  hidden grid-flow-row-dense gap-1 grid-cols-2">
          {productDetails.imageUrl?.map((item, index) => {
            return (
              <img
                key={index}
                className="w-[850px] h-full object-cover"
                src={item}
                alt="DetailsProduct"
              />
            );
          })}
        </div>
        <div
          className="w-full 
         h-[550px]"
        >
          <div className="md:ml-10 py-10">
            <h1 className="font-roboto font-semibold text-[16px]">
              {productDetails.title}
            </h1>
            <h1 className="font-sans text-[13px] text-gray-500">
              MRP inclusive of all taxes
            </h1>
            <h1 className="font-sans text-[20px] font-bold">
              Rs. {productDetails.price}.00
            </h1>
          </div>
          <div className="md:ml-10  md:w-3/4">
            <div className="flex justify-between">
              <h1 className="font-sans text-[13px]">SIZES</h1>
              <div>
                <h1
                  className="cursor-pointer text-xs underline "
                  onClick={openDrawerRight}
                >
                  SIZE GUIDE
                </h1>
                <Drawer
                  placement="right"
                  open={openRight}
                  onClose={closeDrawerRight}
                  className="p-4 "
                  size={400}
                >
                  <div className="mb-6 w-full flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                      SIZE GUIDE
                    </Typography>
                    <IconButton
                      variant="text"
                      color="blue-gray"
                      onClick={closeDrawerRight}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </IconButton>
                  </div>
                  <div className="w-full h-44 ">
                    <table className="table-auto w-full">
                      <thead className="bg-blue-gray-200  ">
                        <tr className=" ">
                          <th className="font-sans text-xs p-2 pl-5">
                            sizes / inch
                          </th>
                          <th className="font-sans text-xs pl-10">length</th>
                          <th className="font-sans text-xs pl-10">chest</th>
                          <th className="font-sans text-xs pl-10 ">shoulder</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="font-sans text-xs pl-9 pt-5">Small</td>
                          <td className="font-sans text-xs pl-14 pt-5">26</td>
                          <td className="font-sans text-xs pl-12 pt-5">21.5</td>
                          <td className="font-sans text-xs pl-16 pt-5">21</td>
                        </tr>
                        <tr>
                          <td className="font-sans text-xs pl-9 pt-5">
                            Medium
                          </td>
                          <td className="font-sans text-xs pl-14 pt-5">27</td>
                          <td className="font-sans text-xs pl-12 pt-5">22.5</td>
                          <td className="font-sans text-xs pl-16 pt-5">21.5</td>
                        </tr>
                        <tr>
                          <td className="font-sans text-xs pl-9 pt-5">Large</td>
                          <td className="font-sans text-xs pl-14 pt-5">28</td>
                          <td className="font-sans text-xs pl-12 pt-5">23.5</td>
                          <td className="font-sans text-xs pl-16 pt-5">22</td>
                        </tr>
                        <tr>
                          <td className="font-sans text-xs pl-9 pt-5">
                            X-large
                          </td>
                          <td className="font-sans text-xs pl-14 pt-5">29</td>
                          <td className="font-sans text-xs pl-12 pt-5">24.5</td>
                          <td className="font-sans text-xs pl-16 pt-5">22.5</td>
                        </tr>
                        <tr>
                          <td className="font-sans text-xs pl-9 pt-5">
                            XX-large
                          </td>
                          <td className="font-sans text-xs pl-14 pt-5">29.5</td>
                          <td className="font-sans text-xs pl-12 pt-5">25.5</td>
                          <td className="font-sans text-xs pl-16 pt-5">23</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Drawer>
              </div>
            </div>

            <div className="mt-2 grid  md:w-[430px]  grid-flow-row-dense gap-2 grid-cols-5">
              {/* <div onClick={()=> } className="h-10 md:w-20 border border-gray-300">
                <h1 className="font-sans text-sm py-2 px-5 md:px-7">XS</h1>
              </div> */}
              <div
                onClick={() => handleSizeClick("S")}
                className={`h-10 md:w-20 border cursor-pointer border-gray-300 ${
                  selectedSize === "S" ? "bg-gray-700 text-white" : ""
                }`}
              >
                <h1 className="font-sans text-sm py-2 px-6 md:px-9">S</h1>
              </div>
              <div
                onClick={() => handleSizeClick("M")}
                className={`h-10 md:w-20 border cursor-pointer border-gray-300 ${
                  selectedSize === "M" ? "bg-gray-700 text-white" : ""
                }`}
              >
                <h1 className="font-sans text-sm py-2 px-6 md:px-8">M</h1>
              </div>
              <div
                onClick={() => handleSizeClick("L")}
                className={`h-10 md:w-20 border cursor-pointer border-gray-300 ${
                  selectedSize === "L" ? "bg-gray-700 text-white" : ""
                }`}
              >
                <h1 className="font-sans text-sm py-2 px-7 md:px-9">L</h1>
              </div>
              <div
                onClick={() => handleSizeClick("XL")}
                className={`h-10 md:w-20 border cursor-pointer border-gray-300 ${
                  selectedSize === "XL" ? "bg-gray-700 text-white" : ""
                }`}
              >
                <h1 className="font-sans text-sm py-2 px-5 md:px-7">XL</h1>
              </div>
              <div
                onClick={() => handleSizeClick("XXL")}
                className={`h-10 md:w-20 border cursor-pointer border-gray-300 ${
                  selectedSize === "XXL" ? "bg-gray-700 text-white" : ""
                }`}
              >
                <h1 className="font-sans text-sm py-2 px-4 md:px-7">XXL</h1>
              </div>
            </div>
            <div className="flex mt-5">
              <h1 className="text-xl">
                <IoAlertCircleOutline />
              </h1>
              <h1 className="font-sans text-[13px] ml-2">
                Delivery Time : 2-7 days
              </h1>
            </div>
          </div>
          <div className=" h-full md:w-4/5 mt-10 md:ml-10">
            {productDetails.isActive ? (
              <button className="w-full h-14 bg-black text-white text-xs">
                BUY NOW
              </button>
            ) : (
              <button
                disabled
                className="w-full h-14 bg-red-200 text-white text-xs"
              >
                SOLD OUT
              </button>
            )}

            <button
              onClick={() => {
                if (selectedSize) {
                  handleAddToCart(productDetails);
                } else {
                  toast.error("Please select the size");
                }
              }}
              className="w-full h-14 mt-2 border border-gray-300 hover:bg-black/65 hover:text-white text-black text-xs"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="md:pb-16 pb-10 -mt-32 md:-mt-0">
        <RecentView />
      </div>

      <Footer />
    </>
  );
}
