import React, { useEffect, useState } from "react";
import Collection1 from "../../../assets/1.webp";
import Collection2 from "../../../assets/2.webp";
import Collection3 from "../../../assets/3.webp";
import Collection4 from "../../../assets/4.webp";
import Collection5 from "../../../assets/5.webp";
import Collection6 from "../../../assets/6.webp";
import '../MainCollection/maincollection.css'
export default function Collection() {
  const CollectionData = [
    {
      imageUrl: Collection1,
    },
    {
      imageUrl: Collection2,
    },
    {
      imageUrl: Collection3,
    },
    {
      imageUrl: Collection4,
    },
    {
      imageUrl: Collection5,
    },
    {
        imageUrl: Collection6,
      },
    {
      imageUrl: Collection6,
    },
  ];
  return (
   
    <>
      <div className="warapper md:mt-7 mt-2">
        {
            CollectionData.map((item,index)=>{
                return(
                    <img key={index} className="md:w-1/5 w-1/2 cursor-pointer" src={item.imageUrl} alt="collectionBanner" />
                )
            })
        }
      
      </div>
    </>
  );
}
