import React from "react";
import Search from "../Navbar/Search";
import { Link } from "react-router-dom";
export default function CategoriesHeader() {
  return (
    <>
      <div className="md:block hidden container mx-auto max-w-screen-2xl bg-custom mt-5  ">
        <div className=" w-full h-14 px-10 flex justify-between">
          <div className="ml-32">
            <ul className="flex gap-10">
              <Link to="/product/men">
                <li className="font-roboto cursor-pointer text-xs py-4">MEN</li>
              </Link>
              <Link to="/product/women">
                <li className="font-roboto cursor-pointer text-xs py-4">
                  WOMEN
                </li>
              </Link>
              <Link to="/product/new-in">
                <li className="font-roboto cursor-pointer text-xs py-4">
                  NEW IN
                </li>
              </Link>
              <Link to="/product/t-shirt">
                <li className="font-roboto cursor-pointer text-xs py-4">
                  T SHIRT
                </li>
              </Link>
              <Link to="/product/oversized-t-shirt">
                <li className="font-roboto cursor-pointer text-xs py-4">
                  OVERSIZED T SHIRT
                </li>
              </Link>
              <Link to="/product/men-basics">
                <li className="font-roboto cursor-pointer text-xs py-4">
                  MEN BASICS
                </li>
              </Link>
              <Link to="/product/womens-basics">
                <li className="font-roboto cursor-pointer text-xs py-4">
                  WOMENS BASICS
                </li>
              </Link>
            </ul>
          </div>
          <div className="mr-10">
            <Search />
          </div>
        </div>
      </div>
    </>
  );
}
