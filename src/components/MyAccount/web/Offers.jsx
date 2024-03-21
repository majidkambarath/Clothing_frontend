import React from "react";
import bln2 from "../../../assets/bln2.jpg";
import "./Offers.css";
export default function Offers() {
  return (
    <>
      <h1 className="font-sans  hidden text-xl md:text-md font-semibold md:flex justify-center">
        My offers
      </h1>
      <h1 className="font-sans md:hidden block  text-xl md:text-md font-semibold ">
       MY OFFERS
      </h1>
      <div className="wapperDiv  md:container md:h-56  h-[300px] md:max-w-screen-md mx-auto md:mt-8 mt-3 ">
        <div className="bg-white itemDiv min-w-40 h-52 w-40">
          <img
            className="w-40 h-28 object-cover object-left-top"
            src={bln2}
            alt="offerImage"
          />
          <h1 className="font-sans text-sm font-bold mt-5 ml-5">
            25% off any item
          </h1>
          <h1 className="font-roboto text-blue-gray-700 text-xs mt-4  ">
            JUST FOR YOU
          </h1>
          <h1 className="font-sans text-blue-gray-700 text-xs  ">
            Expires on 03/26/2024{" "}
          </h1>
        </div>
        <div className="bg-white itemDiv min-w-40  h-52 w-40">
          <img
            className="w-40 h-28 object-cover object-left-top"
            src={bln2}
            alt="offerImage"
          />
          <h1 className="font-sans text-sm font-bold mt-5 ml-5">
            25% off any item
          </h1>
          <h1 className="font-roboto text-blue-gray-700 text-xs mt-4  ">
            JUST FOR YOU
          </h1>
          <h1 className="font-sans text-blue-gray-700 text-xs  ">
            Expires on 03/26/2024{" "}
          </h1>
        </div>
        <div className="bg-white itemDiv min-w-40  h-52 w-40">
          <img
            className="w-40 h-28 object-cover object-left-top"
            src={bln2}
            alt="offerImage"
          />
          <h1 className="font-sans text-sm font-bold mt-5 ml-5">
            25% off any item
          </h1>
          <h1 className="font-roboto text-blue-gray-700 text-xs mt-4  ">
            JUST FOR YOU
          </h1>
          <h1 className="font-sans text-blue-gray-700 text-xs  ">
            Expires on 03/26/2024{" "}
          </h1>
        </div>
        <div className="bg-white itemDiv min-w-40  h-52 w-40">
          <img
            className="w-40 h-28 object-cover object-left-top"
            src={bln2}
            alt="offerImage"
          />
          <h1 className="font-sans text-sm font-bold mt-5 ml-5">
            25% off any item
          </h1>
          <h1 className="font-roboto text-blue-gray-700 text-xs mt-4  ">
            JUST FOR YOU
          </h1>
          <h1 className="font-sans text-blue-gray-700 text-xs  ">
            Expires on 03/26/2024{" "}
          </h1>
        </div>
        <div className="bg-white itemDiv min-w-40  h-52 w-40">
          <img
            className="w-40 h-28 object-cover object-left-top"
            src={bln2}
            alt="offerImage"
          />
          <h1 className="font-sans text-sm font-bold mt-5 ml-5">
            25% off any item
          </h1>
          <h1 className="font-roboto text-blue-gray-700 text-xs mt-4  ">
            JUST FOR YOU
          </h1>
          <h1 className="font-sans text-blue-gray-700 text-xs  ">
            Expires on 03/26/2024{" "}
          </h1>
        </div>
      </div>
    </>
  );
}
