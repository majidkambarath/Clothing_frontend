import React, { useEffect, useState } from "react";
import bln3 from "../../../assets/bln3.jpg";
import bln4 from "../../../assets/bln4.jpg";
import bln5 from "../../../assets/bln5.jpg";
import { NavLink } from "react-router-dom";
export default function Collection() {
  return (
    <>
      <div className=" w-full h-full pt-9 md:pb-0 pb-10   md:h-[500px]">
        <div className="w-full md:gap-5  gap-10 h-full md:h-[450px] flex md:flex-row flex-col">
          <NavLink to={"/product/t-shirt"}>
            <div className="w-full h-full md:h-[450px] cursor-pointer relative  ">
              <img
                className="md:w-[410px] object-cover relative w-[342px] h-[342px] md:h-[450px]  "
                src={bln4}
                alt="CollectionBanner"
              />
              <div className="absolute -mt-28">
                <h1 className="font-sans w-32 hidden md:block ml-32 py-1 px-5 bg-white h-9 font-semibold cursor-pointer ">
                  SHOP NOW
                </h1>
                <h1 className=" font-sans md:mt-4 font-bold md:ml-16 ml-10 mt-14  text-white ">
                  Explore Our Latest Men's T-Shirts!
                </h1>
              </div>
            </div>
          </NavLink>
          <NavLink to={"/product/new-in"}>
            <div className="w-full h-full md:h-[450px] cursor-pointer relative  ">
              <h1 className="font-hanSans absolute z-10 font-extrabold ml-10 md:ml-20 md:pt-10 pt-5  md:text-3xl text-4xl  text-black/60  ">
                NEW ARRIVALS
              </h1>
              <img
                className="md:w-[410px] object-cover relative w-[342px] h-[342px] md:h-[450px]  "
                src={bln5}
                alt="CollectionBanner"
              />
              <div className="">
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
                    className=" md:top-52 top-32 left-40 w-40 absolute   transition duration-150 ease-in-out  md:ml-8 shadow-lg bg-black/65 p-4 rounded"
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
              <div className="absolute -mt-28">
                <h1 className="font-sans w-32 hidden md:block ml-32 py-1 px-5 bg-white h-9 font-semibold cursor-pointer ">
                  SHOP NOW
                </h1>
                <h1 className=" font-sans md:mt-4 font-bold md:ml-16 ml-10  mt-16  text-white ">
                  Explore Our Latest Men's T-Shirts!
                </h1>
              </div>
            </div>
          </NavLink>
          <NavLink to={"/product/mens-basics"}>
            <div className="w-full h-full md:h-[450px] cursor-pointer relative  ">
              <h1 className="font-hanSans absolute z-10 font-extrabold ml-12 md:ml-20 md:pt-10 pt-7  md:text-3xl text-4xl  text-black/40  ">
                MENS BASICS
              </h1>
              <img
                className="md:w-[410px] object-cover relative w-[342px] h-[342px] md:h-[450px]  "
                src={bln3}
                alt="CollectionBanner"
              />
              <div className="">
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
                    className=" md:top-52 top-32 left-40 w-40 absolute   transition duration-150 ease-in-out  md:ml-8 shadow-lg bg-black/65 p-4 rounded"
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
                      MENS BASICS
                    </h1>
                  </div>
                </a>
              </div>
              <div className="absolute -mt-28">
                <h1 className="font-sans w-32 hidden md:block ml-32 py-1 px-5 bg-white h-9 font-semibold cursor-pointer ">
                  SHOP NOW
                </h1>
                <h1 className=" font-sans md:mt-4 font-bold md:ml-16 ml-5 mt-14  text-white ">
                  Explore Men's Basics for Classic Comfort!
                </h1>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

<div className=" w-full h-full pt-9 md:pt-12  bg-red-400  md:h-[500px]">
  <div className="w-full md:gap-5 gap-20 h-full flex md:flex-row flex-col">
    <NavLink>
      <div className="w-full h-[450px] cursor-pointer  ">
        <img
          className="md:w-[410px] object-cover  w-[342px] h-[342px] md:h-[450px] absolute "
          src={bln4}
          alt="CollectionBanner"
        />
        <button className="font-sans w-32 hidden md:block bg-white h-9 font-semibold mt-1 relative md:top-[360px] top-[270px] md:left-[140px] cursor-pointer  left-[100px] ">
          SHOP NOW
        </button>
        <h1 className="relative top-72 md:pl-5 font-sans font-bold ml-11 text-white ">
          Fresh Styles, Hot Arrivals: Shop Now!
        </h1>
      </div>
    </NavLink>
    <NavLink>
      <div className="w-full h-[450px] -mt-20 md:-mt-0  ">
        <img
          className="md:w-[410px]  w-[342px] object-cover h-[342px] md:h-[450px] absolute "
          src={bln5}
          alt="CollectionBanner"
        />
        <div className="">
          <h1 className="font-hanSans z-20 font-extrabold  md:text-3xl text-4xl mt-5 text-black/60 ml-10 md:ml-20 md:mt-10 ">
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
              className=" md:-mt-20 -mt-28 w-40 absolute md:left-[650px] ml-40  transition duration-150 ease-in-out  md:ml-8 shadow-lg bg-black/65 p-4 rounded"
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
          <button className="font-sans hidden md:block w-32 bg-white  h-9 font-semibold md:mt-36   mt-10 ml-28 md:ml-36  cursor-pointer">
            SHOP NOW
          </button>
          <h1 className="mt-14 md:-mt-20   md:pl-5 font-roboto md:relative  font-bold ml-10 text-white ">
            Fresh Styles, Hot Arrivals: Shop Now!
          </h1>
        </div>
      </div>
    </NavLink>
    <NavLink>
      <div className="w-full h-[450px] -mt-20 md:-mt-0  ">
        <img
          className="md:w-[410px] object-cover w-[342px] h-[342px] md:h-[450px] absolute"
          src={bln3}
          alt="CollectionBanner"
        />
        <div className="absolute">
          <h1 className="font-sans font-bold md:text-3xl text-2xl text-black/40 ml-24 md:ml-24 mt-10 ">
            MENS BASICS
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
              className=" md:-mt-20 -mt-28 w-40 absolute md:right-[70px] ml-40  transition duration-150 ease-in-out  md:ml-8 shadow-lg bg-black/65 p-4 rounded"
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
                RS.3999
              </h1>
              <h1 className="text-xs font-sans text-white pb-3">MENS BASICS</h1>
            </div>
          </a>
        </div>
        <div className="absolute">
          <button className="font-sans w-32  hidden md:block bg-white h-9 font-semibold md:mt-32 mt-8  cursor-pointer md:ml-36 ml-28 ">
            SHOP NOW
          </button>
          <h1 className="mt-14 md:-mt-20   md:pl-5 font-roboto md:relative  font-bold ml-5 text-white ">
            Explore Men's Basics for Classic Comfort!
          </h1>
        </div>
      </div>
    </NavLink>
  </div>
</div>;
