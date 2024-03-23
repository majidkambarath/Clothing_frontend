import React, { useRef, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { DeliveryAddressSchema } from "../../../schema/UserDetails";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../../../store/reducer/AuthDetails";
export default function BillingAddress() {
  const dispatch = useDispatch();
  const indianStates = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  const UserData = useSelector((state) => state.AuthData.authData);
  console.log(UserData);
  //   const UserData = {
  //     email: "shahabas@gmail.com",
  //     firstName: "Shahabas",
  //     lastName: "ddd",
  //     phoneNumber: "123-456-7890",
  //     gender: "Male",
  //     zipCode: "12345",
  //   };

  const navigate = useNavigate();
  const inputRef = useRef(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          addressLine1: "",
          addressLine2: "",
          pinCode: "",
          city: "",
          state: "",
          parimay:false
        }}
        validationSchema={DeliveryAddressSchema}
        onSubmit={(values) => {
          dispatch(addAddress(values));
          toast.success("Address Add");
          navigate("/account/addressbook");
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="ml-5 h-full w-full">
              <div className="flex h-full flex-col md:w-[570px] w-72">
                <label
                  className="font-roboto text-[13px]"
                  htmlFor="addressLine1"
                >
                  First name
                </label>
                <Field
                  innerRef={inputRef}
                  className="md:w-[570px] w-72 pl-3 text-md h-12 border border-black/50 mt-1 outline-0"
                  type="text"
                  name="firstName"
                />
                {errors.firstName && touched.firstName ? (
                  <div className="text-red-500 mt-2  font-roboto text-xs ">
                    {errors.firstName}
                  </div>
                ) : null}
              </div>
              <div className="flex h-full flex-col md:w-[570px] w-72">
                <label className="font-roboto text-[13px]" htmlFor="lastName">
                  Last name
                </label>
                <Field
                  className="md:w-[570px] w-72 pl-3 text-md h-12 border border-black/50 mt-1 outline-0"
                  type="text"
                  name="lastName"
                />
                {errors.lastName && touched.lastName ? (
                  <div className="text-red-500 mt-2  font-roboto text-xs ">
                    {errors.lastName}
                  </div>
                ) : null}
              </div>
              <div className="flex h-full flex-col md:w-[570px] w-72">
                <label
                  className="font-roboto text-[13px]"
                  htmlFor="addressLine1"
                >
                  Address line 1
                </label>
                <Field
                  className="md:w-[570px] w-72 pl-3 text-md h-12 border border-black/50 mt-1 outline-0"
                  type="text"
                  name="addressLine1"
                />
                {errors.addressLine1 && touched.addressLine1 ? (
                  <div className="text-red-500 mt-2  font-roboto text-xs ">
                    {errors.addressLine1}
                  </div>
                ) : null}
              </div>
              <div className="flex h-full flex-col mt-2  md:w-[570px] w-72">
                <label
                  className="font-roboto text-[13px]"
                  htmlFor="addressLine2"
                >
                  Address line 2
                </label>
                <Field
                  className="md:w-[570px] w-72 h-12 pl-3 text-md border border-black/50 mt-1 outline-0"
                  type="text"
                  name="addressLine2"
                />
                {errors.addressLine2 && touched.addressLine2 ? (
                  <div className="text-red-500 mt-2  font-roboto text-xs ">
                    {errors.addressLine2}
                  </div>
                ) : null}
              </div>
              <div className="flex h-full flex-col mt-2 md:w-[570px] w-72">
                <label className="font-roboto text-[13px]" htmlFor="pinCode">
                  Pin code
                </label>
                <Field
                  className="md:w-[570px] w-72 h-12 pl-3 text-md border border-black/50 mt-1 outline-0"
                  type="text"
                  name="pinCode"
                />
                {errors.pinCode && touched.pinCode ? (
                  <div className="text-red-500 mt-2  font-roboto text-xs ">
                    {errors.pinCode}
                  </div>
                ) : null}
              </div>
              <div className="flex h-full flex-col mt-2 md:w-[570px] w-72">
                <label className="font-roboto text-[13px]" htmlFor="city">
                  City
                </label>
                <Field
                  className="md:w-[570px] w-72 h-12 pl-3 text-md border border-black/50 mt-1 outline-0"
                  type="text"
                  name="city"
                />
                {errors.city && touched.city ? (
                  <div className="text-red-500 mt-2  font-roboto text-xs ">
                    {errors.city}
                  </div>
                ) : null}
              </div>
              <div className="flex h-full flex-col mt-2 md:w-[570px] w-72">
                <label className="font-roboto text-[13px]" htmlFor="state">
                  State
                </label>
                <Field
                  className="md:w-[570px] w-72 h-12 pl-3 text-md border border-black/50 mt-1 outline-0"
                  as="select"
                  name="state"
                >
                  <option value="">Select State</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </Field>
                {errors.state && touched.state ? (
                  <div className="text-red-500 mt-2  font-roboto text-xs ">
                    {errors.state}
                  </div>
                ) : null}
              </div>
              <div className="flex h-full mt-2 md:w-[570px] w-72">
                <Field
                  className="w-7 h-12 pl-3 text-md border border-black/50 mt-1 outline-0"
                  type="checkbox"
                  name="parimay"
                />
                <label className="font-roboto text-[13px] ml-3 mt-4" htmlFor="parimay">
                  Use as default
                </label>
                
              </div>
              <button
                type="submit"
                className="md:w-[570px] w-72 h-12 mt-5 bg-black/90 hover:bg-black text-white  font-roboto text-xs "
              >
                SAVE
              </button>
              <Link to={"/settings"}>
                <button
                  type="submit"
                  className="md:w-[570px] w-72 h-12 mt-5 border border-black text-black underline  font-roboto text-xs "
                >
                  CANCEL
                </button>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
