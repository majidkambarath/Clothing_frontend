import React from "react";
import "../Categories/Categories.css";
import Cat1 from "../../../assets/cat1.webp";
import Cat2 from "../../../assets/cat2.webp";
import Cat3 from "../../../assets/cat3.webp";
import Cat4 from "../../../assets/cat4.webp";
import Cat5 from "../../../assets/cat5.webp";
import Cat6 from "../../../assets/cat6.webp";
export default function MainCategories() {
  const CategoriesData = [
    {
      imageUrl: Cat1,
    },
    {
      imageUrl: Cat2,
    },
    {
      imageUrl: Cat3,
    },
    {
      imageUrl: Cat4,
    },
    {
      imageUrl: Cat5,
    },
    {
      imageUrl: Cat6,
    },
    {
      imageUrl: Cat6,
    },
  ];
  return (
    <>
      {" "}
      <div className=" ">
        <h1 className="font-roboto font-bold text-3xl flex justify-center mt-4 md:pb-8 pb-5 text-gray-500 ">CATEGORIES</h1>
        <div className="warapper gap-4 md:ml-4 ml-2 ">
          {CategoriesData.map((item, index) => {
            return (
              <img
                key={index}
                className="md:w-1/5 w-1/2 cursor-pointer"
                src={item.imageUrl}
                alt="collectionBanner"
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
