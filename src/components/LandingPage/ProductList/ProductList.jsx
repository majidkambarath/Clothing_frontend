import React from 'react'
import product1 from "../../../assets/product1.webp";
import product2 from "../../../assets/product2.webp";
import product3 from "../../../assets/product3.webp";
import product4 from "../../../assets/product4.webp";
import product5 from "../../../assets/product5.webp";
import product6 from "../../../assets/product6.webp";
import product7 from "../../../assets/product7.webp";
import product8 from "../../../assets/product8.webp";
export default function ProductList() {
    const productData = [
        {
          imageUrl: product1,
          title: "DUTCH BLU GARLAND T-SHIRT",
          dicprice: 5000,
          price: 3500,
        },
        {
          imageUrl: product2,
          title: "DUTCH BLU GARLAND T-SHIRT",
          dicprice: 4000,
          price: 2500,
        },
        {
          imageUrl: product3,
          title: "DUTCH BLU GARLAND T-SHIRT",
          dicprice: 6000,
          price: 4500,
        },
        {
          imageUrl: product4,
          title: "DUTCH BLU GARLAND T-SHIRT",
          dicprice: 5990,
          price: 3499,
        },
        {
          imageUrl: product5,
          title: "DUTCH BLU GARLAND T-SHIRT",
          dicprice: 6000,
          price: 4999,
        },
        {
          imageUrl: product6,
          title: "DUTCH BLU GARLAND T-SHIRT",
          dicprice: 8000,
          price: 4999,
        },
        {
          imageUrl: product7,
          title: "DUTCH BLU GARLAND T-SHIRT",
          dicprice: 7000,
          price: 6999,
        },
        {
          imageUrl: product8,
          title: "DUTCH BLU GARLAND T-SHIRT",
          dicprice: 8000,
          price: 7999,
        },
      ];
  return (
    <div className='bg-custom h-full'> 
    <div className='flex justify-between'>
        <h1 className='font-roboto md:font-bold text-xs pb-2 ml-6'>MORE FROM BLNZED</h1>
        <button className='bg-white text-[10px] font-roboto mr-3  h-6 w-28'>DISCOVER MORE</button>
    </div>
     <div className='grid grid-flow-row-dense md:grid-cols-4 grid-cols-2 gap-2 md:gap-0 mt-4  ml-1'>
        {productData.map((item) => {
            return (
              <div className="md:h-[435px] cursor-pointer">
                <img
                  className="md:w-[333px]  md:h-[380px] "
                  src={item.imageUrl}
                  alt="productCardImage"
                />
                <h1 className="text-xs font-sans mt-2 md:font-bold">
                  DUTCH BLU GARLAND T-SHIRT
                </h1>
                <h1 className="text-xs font-sans text-gray-500  font-bold">
                  RS. {item.price}
                </h1>
              </div>
            );
          })}
    </div>

    <div className='flex justify-center h-[100px]'>
    <button className='text-xs font-roboto h-7 w-36 border t  border-black/65 mt-5 hover:bg-black hover:text-white hover:rounded-2xl '>DISCOVER MORE</button>
   
    </div>
 
    
    </div>
   
  )
}
