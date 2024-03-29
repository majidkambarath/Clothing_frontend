import React from "react";
import ban4 from "../../../assets/ban5.jpg";
import logo from "../../../assets/favicon2.png";
import CircularText  from "../../../assets/circle.png";
import './SubBanner.css'
export default function SubBanner() {
  return (
    <>
      <div className="md:h-[400px] h-[200px] w-ful">
        <img className="w-full h-full object-cover" src={ban4} alt="" />
         <div className="flex justify-center md:-mt-20 mt-3 ">
          <img className=" animate-spin-slow w-20 h-20 -mt-[150px] " src={CircularText} alt="CircularText" />
          <img className=" w-10 absolute  -mt-[126px] " src={logo} alt="LogoBarnd" />
         </div>
      </div>
     
    </>
  );
}
