import React from "react";
import Offers from "./Offers";
import Purchases from "./Purchases";
export default function MyAccount() {
  return (
    <>
      <div className="w-full h-full">
        <Offers />
        <Purchases />
        <div className="h-5"></div>
      </div>
    </>
  );
}
