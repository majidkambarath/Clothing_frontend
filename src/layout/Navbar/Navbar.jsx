import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { MdFavoriteBorder } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { SlUser } from "react-icons/sl";
import { GrFavorite } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Search from "./Search";
import { NavLink } from "react-router-dom";
import { Avatar, Typography } from "@material-tailwind/react";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineArrowRight } from "react-icons/hi2";
import image1 from "../../assets/cat1.webp";
import image2 from "../../assets/cat2.webp";
import image3 from "../../assets/cat3.webp";
import image4 from "../../assets/cat4.webp";
import image5 from "../../assets/cat5.webp";
export default function Navbar() {
  const [active, setActive] = useState(true);
  const [profile, setProfile] = useState(true);
  const [hide, setHide] = useState(true);
  useEffect(() => {
    const checkWindowWidth = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 960) {
        setActive(true);
      } else if (windowWidth >= 600) {
        setActive(false);
      } else {
        setActive(false);
      }
    };

    // Check window width when the component mounts
    checkWindowWidth();

    // Add event listener for window resize
    window.addEventListener("resize", checkWindowWidth);

    // Clean up by removing event listener when component unmounts
    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);
  return (
    <>
      {active ? (
        <div className="bg-custom w-full h-16 flex ">
          <img
            className="w-16 md:w-20 md:py-3 py-4 ml-6 md:ml-12 "
            src={logo}
            alt="LogoPNG"
          />
          <div className="py-5 lg:ml-[100px] xl:ml-[450px] ">
            <ul className="flex md:gap-7 ">
              <li>
                <h1 className="font-roboto font-semibold cursor-pointer text-xs">
                  NEW IN
                </h1>
              </li>
              <li>
                <h1 className="font-roboto font-semibold cursor-pointer text-xs">
                  APPAREL
                </h1>
              </li>
            </ul>
          </div>
          <div className="lg:ml-[200px] hidden md:block ">
            <Search />
          </div>
          <div className="py-5 md:ml-auto md:mr-10 ">
            <ul className="md:flex md:gap-10 ">
              <NavLink to={"/login"}>
                <li>
                  <h1 className="font-roboto font-semibold underline cursor-pointer  text-xs">
                    LOGIN
                  </h1>
                </li>
              </NavLink>

              <li>
                <h1 className=" cursor-pointer text-xl">
                  <MdFavoriteBorder />
                </h1>
              </li>
              <li>
                <h1 className="cursor-pointer text-xl">
                  <FaShoppingBag />
                </h1>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <>
          <div className="bg-custom w-full h-16 flex justify-evenly ">
            <h1
              onClick={() => setHide(!hide)}
              className="font-roboto cursor-pointer text-gray-700 text-2xl py-4 pl-3"
            >
              <FiMenu />
            </h1>
            <NavLink to={'/'}>
            <img
              className="w-16 mt-3 h-8 cursor-pointer ml-3 "
              src={logo}
              alt="LogoPNG"
            />
            </NavLink>
            
            <div className="flex gap-5 pl-16">
              <h1 className="cursor-pointer py-1 text-gray-700  text-2xl mt-3">
                <SlUser />
              </h1>
              <h1 className="cursor-pointer py-1 text-gray-700  text-2xl mt-3">
                <FiSearch />
              </h1>
              <div className="flex  ">
                <h1 className="cursor-pointer py-1 text-gray-700  text-2xl  mt-3">
                  <GrFavorite />
                </h1>
                <h1 className="font-roboto py-1 text-gray-700  font-bold ">
                  1
                </h1>
              </div>
              <div className="flex mr-4 py-">
                <h1 className="cursor-pointer py-1 text-gray-700 text-2xl mt-3">
                  <HiOutlineShoppingBag />
                </h1>
                <h1 className="font-roboto py-1 text-gray-700 font-bold ">1</h1>
              </div>
            </div>
          </div>
          {!hide && (
            <div className="bg-custom h-full w-[330px] -mt-16  absolute z-10 ">
              <h1 onClick={() => setHide(!hide)} className="text-2xl ml-6 mt-4">
                <RxCross1 />
              </h1>
              <div className=" mt-8 ml-5 ">
                <div className="flex flex-col gap-6 ">
                  <div className="flex items-center gap-4">
                    <Avatar className="object-top" src={image1} alt="avatar" />
                    <div>
                      <Typography className="text-xs font-roboto font-semibold">
                        OVERSIZED T SHIRT
                      </Typography>
                    </div>
                    <h1 className="text-xl ml-20 cursor-pointer">
                      <HiOutlineArrowRight />
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col gap-6 mt-6 ">
                  <div className="flex items-center gap-4">
                    <Avatar className="object-top" src={image5} alt="avatar" />
                    <div>
                      <Typography className="text-xs font-roboto font-semibold">
                        OVERSIZED T SHIRT
                      </Typography>
                    </div>
                    <h1 className="text-xl ml-20 cursor-pointer">
                      <HiOutlineArrowRight />
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col gap-6 mt-6 ">
                  <div className="flex items-center gap-4">
                    <Avatar className="object-top" src={image2} alt="avatar" />
                    <div>
                      <Typography className="text-xs font-roboto font-semibold">
                        OVERSIZED T SHIRT
                      </Typography>
                    </div>
                    <h1 className="text-xl ml-20 cursor-pointer">
                      <HiOutlineArrowRight />
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col gap-6 mt-6 ">
                  <div className="flex items-center gap-4">
                    <Avatar className="object-top" src={image3} alt="avatar" />
                    <div>
                      <Typography className="text-xs font-roboto font-semibold">
                        OVERSIZED T SHIRT
                      </Typography>
                    </div>
                    <h1 className="text-xl ml-20 cursor-pointer">
                      <HiOutlineArrowRight />
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col gap-6 mt-6 ">
                  <div className="flex items-center gap-4">
                    <Avatar className="object-top" src={image4} alt="avatar" />
                    <div>
                      <Typography className="text-xs font-roboto font-semibold">
                        OVERSIZED T SHIRT
                      </Typography>
                    </div>
                    <h1 className="text-xl ml-20 cursor-pointer">
                      <HiOutlineArrowRight />
                    </h1>
                  </div>
                </div>
                <div className="mt-10">
                  <ul>
                    <NavLink to={'/login'}>
                    <li className="font-roboto text-xs">LOGIN</li>
                    </NavLink>
                   
                    <li className="font-roboto text-xs mt-6">CUSTOMER SERVICE</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
