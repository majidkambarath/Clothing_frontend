import React from 'react'
import bln2 from '../../../assets/bln2.jpg'
export default function Purchases() {
  return (
    <>
          <div className=" h-full md:ml-14  mt-5">
          <h1 className="font-sans text-md font-semibold">All purchases</h1>
          <div className=" h-full bg-white mt-2 py-5  w-full">
            <div className=" grid px-2  grid-flow-row-dense md:grid-cols-3 grid-cols-2 gap-2 md:gap-6 md:w-[720px]  md:ml-6">
              <div className="md:w-52 w-full h-[270px]  md:h-56 shadow-md cursor-pointer">
                <img
                  className="md:h-40  md:w-52 object-cover"
                  src={bln2}
                  alt="PurchasesImage"
                />
                <h1 className="text-[9px] md:text-xs text-gray-700 font-sans mt-2 font-bold">
                  DUTCH BLU GARLAND T-SHIRT
                </h1>
                <h1 className="text-[9px] md:text-xs text-gray-700 font-sans  font-bold">
                  RS. 4999
                </h1>
              </div>
              <div className="md:w-52 w-full h-[270px]  md:h-56 shadow-md cursor-pointer">
                <img
                  className="md:h-40  md:w-52 object-cover"
                  src={bln2}
                  alt="PurchasesImage"
                />
                <h1 className="text-[9px] md:text-xs text-gray-700 font-sans mt-2 font-bold">
                  DUTCH BLU GARLAND T-SHIRT
                </h1>
                <h1 className="text-[9px] md:text-xs text-gray-700 font-sans  font-bold">
                  RS. 4999
                </h1>
              </div>
             
          
            </div>
          </div>
        </div>
    </>
  )
}
