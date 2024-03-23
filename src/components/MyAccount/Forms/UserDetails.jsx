import React, { useRef, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { userDetailsSchema } from "../../../schema/UserDetails";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthDataStore } from "../../../store/reducer/AuthDetails";
export default function UserDetails() {
  const dispatch = useDispatch();
  const UserData = useSelector((state) => state.AuthData.authData);
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
        initialValues={UserData}
        validationSchema={userDetailsSchema}
        onSubmit={(values) => {
          dispatch(setAuthDataStore(values));
          toast.success("Update Success");
          console.log(values);
          navigate("/settings");
        }}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form>
            <div className="ml-5 h-full w-full">
              <div className="flex h-full flex-col md:w-[570px] w-72">
                <label className="font-roboto text-[13px]" htmlFor="email">
                  Email
                </label>
                <Field
                  innerRef={inputRef}
                  className="md:w-[570px] w-72 pl-3 text-md h-12 border border-black/50 mt-1 outline-0"
                  type="text"
                  name="email"
                />
                {errors.email && touched.email ? (
                  <div className="text-red-500 mt-2  font-roboto text-xs ">
                    {errors.email}
                  </div>
                ) : null}
              </div>
              <div className="flex h-full flex-col mt-2  md:w-[570px] w-72">
                <label className="font-roboto text-[13px]" htmlFor="firstName">
                  First name
                </label>
                <Field
                  className="md:w-[570px] w-72 h-12 pl-3 text-md border border-black/50 mt-1 outline-0"
                  type="text"
                  name="firstName"
                />
                {errors.firstName && touched.firstName ? (
                  <div className="text-red-500 mt-2  font-roboto text-xs ">
                    {errors.firstName}
                  </div>
                ) : null}
              </div>
              <div className="flex h-full flex-col mt-2 md:w-[570px] w-72">
                <label className="font-roboto text-[13px]" htmlFor="lastName">
                  Last name
                </label>
                <Field
                  className="md:w-[570px] w-72 h-12 pl-3 text-md border border-black/50 mt-1 outline-0"
                  type="text"
                  name="lastName"
                />
                {errors.lastName && touched.lastName ? (
                  <div className="text-red-500 mt-2  font-roboto text-xs ">
                    {errors.lastName}
                  </div>
                ) : null}
              </div>
              <div className="flex h-full flex-col mt-2 md:w-[570px] w-72">
                <label
                  className="font-roboto text-[13px]"
                  htmlFor="phoneNumber"
                >
                  Phone number
                </label>
                <Field
                  className="md:w-[570px] w-72 h-12 pl-3 text-md border border-black/50 mt-1 outline-0"
                  type="number"
                  name="phoneNumber"
                />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <div className="text-red-500 mt-2  font-roboto text-xs ">
                    {errors.phoneNumber}
                  </div>
                ) : null}
              </div>
              <div className="flex h-full flex-col mt-2 md:w-[570px] w-72">
                <label className="font-roboto text-[13px]" htmlFor="gender">
                  Gender
                </label>
                <Field
                  className="md:w-[570px] w-72 h-12 pl-3 text-md border border-black/50 mt-1 outline-0"
                  as="select"
                  name="gender"
                >
                  <option className="font-roboto text-sm" value="">
                    Select
                  </option>
                  <option className="font-roboto text-sm" value="male">
                    Male
                  </option>
                  <option className="font-roboto text-sm" value="female">
                    Female
                  </option>
                  <option className="font-roboto text-sm" value="other">
                    Other
                  </option>
                </Field>
                {errors.gender && touched.gender ? (
                  <div className="text-red-500 mt-2  font-roboto text-xs ">
                    {errors.gender}
                  </div>
                ) : null}
              </div>
              <div className="flex h-full flex-col mt-2 md:w-[570px] w-72">
                <label className="font-roboto text-[13px]" htmlFor="zipCode">
                  Zipcode
                </label>
                <Field
                  className="md:w-[570px] w-72 h-12 pl-3 text-md border border-black/50 mt-1 outline-0"
                  type="number"
                  name="zipCode"
                />
                {errors.zipCode && touched.zipCode ? (
                  <div className="text-red-500 mt-2  font-roboto text-xs ">
                    {errors.zipCode}
                  </div>
                ) : null}
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
