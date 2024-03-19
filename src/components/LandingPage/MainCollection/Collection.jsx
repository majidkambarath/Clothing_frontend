import React, { useEffect, useState } from "react";
import bln3 from "../../../assets/bln3.jpg";
import bln4 from "../../../assets/bln4.jpg";
import bln5 from "../../../assets/bln5.jpg";
export default function Collection() {
  return (
    <>
      <div className="bg-custom container md:max-w-screen-2xl mx-auto sm:px-8 xs:px-3 sm1:px-10 s:px-2 md:px-5   md:h-[500px]">
        <div className="w-full   h-full pt-3 gap-5 flex md:flex-row flex-col">
          <div className="w-full h-[450px] ">
            <img
              className="md:w-[420px] w-[350px] md:h-[450px] absolute"
              src={bln4}
              alt="CollectionBanner"
            />
            <button className="font-sans w-32 bg-white h-9 font-semibold mt-1 relative top-[330px] md:left-[150px] cursor-pointer  left-[100px] ">
              SHOP NOW
            </button>
          </div>
          <div className="w-full h-[450px] md:mt-0 mt-8 ">
            <img
              className="md:w-[420px] w-[350px] md:h-[450px] absolute"
              src={bln5}
              alt="CollectionBanner"
            />
            <div className="absolute">
              <h1 className="font-sans font-bold text-3xl text-black/40 ml-14 md:ml-24 mt-10 ">
                NEW ARRIVALS
              </h1>
            </div>
            <div className="mt-60 md:ml-14">
              <a
                tabindex="0"
                role="link"
                aria-label="tooltip 2"
                // className="focus:outline-none focus:ring-gray-300 rounded-full focus:ring-offset-2 focus:ring-2 focus:bg-gray-200 relative  md:my-0 md:mx-64"
                onmouseover="showTooltip(2)"
                onfocus="showTooltip(2)"
                onmouseout="hideTooltip(2)"
              >
                <div
                  id="tooltip2"
                  role="tooltip"
                  className=" md:-mt-20 -mt-14 w-40 absolute md:left-[650px] ml-36  transition duration-150 ease-in-out  md:ml-8 shadow-lg bg-black/65 p-4 rounded"
                >
                  <svg
                    className="absolute left-0 -ml-2 bottom-0 top-0 h-full"
                    width="9px"
                    height="16px"
                    viewBox="0 0 9 16"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Tooltips-"
                        transform="translate(-874.000000, -1029.000000)"
                        fill="#222222"
                      >
                        <g
                          id="Group-3-Copy-16"
                          transform="translate(850.000000, 975.000000)"
                        >
                          <g
                            id="Group-2"
                            transform="translate(24.000000, 0.000000)"
                          >
                            <polygon
                              id="Triangle"
                              transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
                              points="4.5 57.5 12.5 66.5 -3.5 66.5"
                            ></polygon>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <h1 className="text-xs font-semibold font-roboto text-white pb-1">
                    RS.3000
                  </h1>
                  <h1 className="text-xs font-sans text-white pb-3">
                    OVERSIZED T SHIRT
                  </h1>
                </div>
              </a>
            </div>
            <div className="absolute">
              <button className="font-sans w-32 bg-white  h-9 font-semibold  mt-24 ml-28 md:ml-36  cursor-pointer">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="w-full h-[450px] ">
            <img
              className="md:w-[420px] w-[350px] md:h-[450px] absolute"
              src={bln3}
              alt="CollectionBanner"
            />
            <div className="absolute">
              <h1 className="font-sans font-bold text-3xl text-black/40 ml-16 md:ml-24 mt-10 ">
                MENS BASICS
              </h1>
            </div>
            <button className="font-sans w-32 bg-white h-9 font-semibold mt-1 relative top-[330px] md:left-[150px] cursor-pointer  left-[100px] ">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
