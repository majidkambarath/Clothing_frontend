import React from 'react'
import bln2 from '../../../assets/bln2.jpg'
export default function Purchases() {
  return (
    <>
          <div className=" container h-full max-w-screen-md mx-auto mt-11">
          <h1 className="font-sans text-md font-semibold">All purchases</h1>
          <div className=" h-full bg-white mt-2 py-5  w-full">
            <div className=" grid grid-flow-row-dense md:grid-cols-3 grid-cols-2 gap-6 md:gap-6 md:w-[720px]  md:ml-6">
              <div className="md:w-52 h-72 md:h-56 shadow-md cursor-pointer">
                <img
                  className="md:h-40 md:w-52 object-cover"
                  src={bln2}
                  alt="PurchasesImage"
                />
                <h1 className="text-xs text-gray-700 font-sans mt-2 font-bold">
                  DUTCH BLU GARLAND T-SHIRT
                </h1>
                <h1 className="text-xs text-gray-700 font-sans  font-bold">
                  RS. 4999
                </h1>
              </div>
              <div className="md:w-52 h-72 md:h-56 shadow-md cursor-pointer">
                <img
                  className="md:h-40 md:w-52 object-cover"
                  src={bln2}
                  alt="PurchasesImage"
                />
                <h1 className="text-xs text-gray-700 font-sans mt-2 font-bold">
                  DUTCH BLU GARLAND T-SHIRT
                </h1>
                <h1 className="text-xs text-gray-700 font-sans  font-bold">
                  RS. 4999
                </h1>
              </div>
              <div className="md:w-52 h-72 md:h-56 shadow-md cursor-pointer">
                <img
                  className="md:h-40 md:w-52 object-cover"
                  src={bln2}
                  alt="PurchasesImage"
                />
                <h1 className="text-xs text-gray-700 font-sans mt-2 font-bold">
                  DUTCH BLU GARLAND T-SHIRT
                </h1>
                <h1 className="text-xs text-gray-700 font-sans  font-bold">
                  RS. 4999
                </h1>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
