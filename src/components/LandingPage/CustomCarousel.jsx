import React from "react";
import { Carousel } from "@material-tailwind/react";
import Banner1 from "../../assets/Banner1.jpg";
import Banner2 from "../../assets/Banner2.png";
export default function CustomCarousel() {
  const carouselData = [
    {
      imageUrl: Banner1,
    },
    {
      imageUrl: Banner2,
    },
   
  ];
  return (
    <>
    <Carousel
      className=" relative bg-custom "
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
       {carouselData.map((item, index) => (
          <div key={index} className="w-full md:h-[450px]">
            <img
              src={item.imageUrl}
              alt={`image ${index + 1}`}
              className="h-full md:h-[450px]  w-full object-fill "
            />
          </div>
        ))}
    </Carousel>
  
     
    </>
  );
}
