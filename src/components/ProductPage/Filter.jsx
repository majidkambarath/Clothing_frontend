import React from "react";

export default function Filter() {
  return (
    <div className="bg-white block md:hidden ml-24 mt-5  absolute z-10 h-[600px] w-2/3">
      <h1
        onClick={() => setHide(!hide)}
        className="flex justify-end text-xl py-3 px-3"
      >
        <RxCross1 />
      </h1>
    </div>
  );
}
