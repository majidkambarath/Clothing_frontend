import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { MdFavoriteBorder } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import Search from "./Search";
import { NavLink } from "react-router-dom";

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
              <NavLink to={'/login'}>
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
          <div className="bg-custom w-full h-16 flex justify-between ">
            <h1
              onClick={() => setHide(!hide)}
              className="font-roboto text-xs py-6 ml-6"
            >
              {hide ? "MENU" :"CLOSE"}
            </h1>
            <img
              className="w-24 mt-2 h-10 cursor-pointer mr-5 "
              src={logo}
              alt="LogoPNG"
            />
            <div className="flex mr-4">
              <h1 className="cursor-pointer text-2xl mt-3">
                <FaShoppingBag />
              </h1>
              <h1 className="font-roboto font-bold py-1 ">1</h1>
            </div>
          </div>
          {!hide && (
         <div className={`bg-cyan-50 h-12 w-[360px] mt-2 absolute z-10  ${hide ? 'translate-x-0' : 'translate-x-4'}`}>
              <div className="py-4 ml-2  ">
                <ul className="flex gap-7  ">
                  <li>
                    <h1 className="font-roboto  font-semibold cursor-pointer text-xs">
                      NEW IN
                    </h1>
                  </li>
                  <li>
                    <h1 className="font-roboto font-semibold cursor-pointer text-xs">
                      APPAREL
                    </h1>
                  </li>
                  <li>
                    <h1 className="cursor-pointer font-roboto font-bold text-xs">
                      FAVORITE
                    </h1>
                  </li>
                  <NavLink to={'/login'}>
                  <li>
                    <h1 className="font-roboto font-semibold underline cursor-pointer  text-xs">
                      LOGIN
                    </h1>
                  </li>
                  </NavLink>
                 
                  <li>
                    <h1 className="font-roboto font-semibold cursor-pointer text-xs">
                      SEARCH
                    </h1>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
