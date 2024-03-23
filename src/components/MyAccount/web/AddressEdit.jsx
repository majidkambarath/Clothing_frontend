import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import BillingAddress from "../Forms/BillingAddress";
import DeliveryAddress from "../Forms/DeliveryAddress";
import { RxCross1 } from "react-icons/rx";
import { removeAddress } from "../../../store/reducer/AuthDetails";
import { useNavigate } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";
export default function AddressEdit() {
  const UserData = useSelector((state) => state.AuthData.authData);
  const navigte = useNavigate();
  const dispatch = useDispatch();
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(false);
  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");

    if (confirmDelete) {
      dispatch(removeAddress(index));
    } else {
      navigte("/account/addressbook");
    }
  };
  return (
    <>
      <div className="w-full md:py-0 py-20 h-full">
        <Breadcrumbs className="bg-transparent  ml-3 md:hidden flex  ">
          <Link to={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </Link>
          <Link className="opacity-60" to={"/account"}>
            Account
          </Link>
          <Link className="opacity-60" to={"/settings"}>
            Settings
          </Link>
          <Link className="text-red-500" to={"/account/addressbook"}>
            Address Book
          </Link>
        </Breadcrumbs>
        <h1 className="font-roboto text-xl mt-4 md:mt-4 md:text-[28px] font-semibold flex justify-center">
          Address Book
        </h1>
        <div
          className={`bg-white md:w-3/4 ${
            hide ? "md:h-full" : "md:h-[150px]"
          } h-full md:ml-20 mt-7`}
        >
          <div className="flex justify-between ">
            <h1 className="font-sans text-md font-semibold py-4 px-4">
              Billing Address
            </h1>
            {!hide ? (
              <h1
                onClick={() => setHide(!hide)}
                className="font-sans text-sm underline cursor-pointer mr-7 mt-5"
              >
                Edit
              </h1>
            ) : (
              <h1
                onClick={() => setHide(!hide)}
                className="font-sans text-xl  cursor-pointer mr-7 mt-5"
              >
                <RxCross1 />
              </h1>
            )}
          </div>
          {!hide ? (
            UserData.billingAddress.length === 0 ? (
              <div className="mt-3">
                <h1 className="font-sans text-[11px] ml-4">
                  No home address saved.
                </h1>
                <h1
                  onClick={() => setHide(!hide)}
                  className="font-sans text-[11px] cursor-pointer underline mt-2 ml-4"
                >
                  Add New Address.
                </h1>
              </div>
            ) : (
              <div className="md:w-2/3 w-3/4 pb-5 md:pb-0  mt-2">
                <h1 className="font-sans text-[13px] ml-5">
                  {UserData.billingAddress[0]?.addressLine1}
                </h1>
                <h1 className="font-sans text-[13px] ml-5">
                  {UserData.billingAddress[0]?.addressLine2}
                </h1>
                <h1 className="font-sans text-[13px] ml-5">
                  {UserData.billingAddress[0]?.pinCode}
                  <span> {UserData.billingAddress[0]?.city} </span>
                  <span> {UserData.billingAddress[0]?.state}</span>
                </h1>
              </div>
            )
          ) : (
            <div className="py-10 px-3">
              <BillingAddress />
              <div className="h-10"></div>
            </div>
          )}
        </div>
        {UserData.address.length === 0 ? (
          <div className="bg-white md:h-[150px] md:w-3/4 h-48 md:ml-20 mt-10">
            <div className="flex justify-between ">
              <h1 className="font-sans text-md font-semibold py-4 px-4">
                Delivery Address
              </h1>
              <Link to={"/account/addressbook"}>
                <h1 className="font-sans text-sm underline cursor-pointer mr-7 mt-5">
                  Edit
                </h1>
              </Link>
            </div>

            <div className=" mt-4 flex">
              <h1 className="font-sans ml-4 text-[13px]">
                No shipping address saved.
              </h1>
            </div>
          </div>
        ) : (
          <div>
            {UserData.address.map((data, index) => {
              return (
                <div
                  key={index}
                  className="bg-white md:h-[150px] md:w-3/4 h-48 md:ml-20 mt-10"
                >
                  <div className="flex justify-between ">
                    <h1 className="font-sans text-md font-semibold py-4 px-4">
                      Delivery Address
                    </h1>

                    <h1
                      onClick={() => handleDelete(index)}
                      className="font-sans cursor-pointer text-xl py-4 mr-5"
                    >
                      <AiOutlineDelete />
                    </h1>
                  </div>

                  <div className="w-full mt-4 flex">
                    <div className="md:w-2/3 w-3/4 ">
                      <h1 className="font-sans text-[13px] ml-5">
                        {data?.addressLine1}
                      </h1>
                      <h1 className="font-sans text-[13px] ml-5">
                        {data?.addressLine2}
                      </h1>
                      <h1 className="font-sans text-[13px] ml-5">
                        {data?.pinCode}
                        <span> {data?.city} </span>
                        <span> {data?.state}</span>
                      </h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {!show ? (
          <button
            onClick={() => setShow(!show)}
            type="submit"
            className="md:w-3/4 md:ml-20 w-full h-12  border font-semibold border-black text-black/60 mt-10  font-roboto text-[16px] "
          >
            Add new address
          </button>
        ) : (
          <div className="bg-white md:h-full  md:w-3/4 h-full md:ml-20 mt-10">
            <div className="flex justify-between ">
              <h1 className="font-sans text-md font-semibold py-4 px-4">
                Delivery Address
              </h1>

              <h1
                onClick={() => setShow(!show)}
                className="font-sans text-xl cursor-pointer mr-7 mt-5"
              >
                <RxCross1 />
              </h1>
            </div>
            <div className="py-10 px-3">
              <DeliveryAddress />
            </div>
          </div>
        )}

        <div className="md:h-20"></div>
      </div>
    </>
  );
}
