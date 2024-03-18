import React, { useRef, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { RegisterSchema } from "../../schema/AuthSchema";
// import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function RegisterForm() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [hide, setHide] = useState(false);
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
          email: "",
          password: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          console.log(values);
          navigate("/");
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mt-10 pl-10 md:pl-0">
              <div className="flex flex-col">
                <label className="font-roboto text-xs" htmlFor="firstName">
                  FIRSTNAME
                </label>
                <Field
                  innerRef={inputRef}
                  className="md:w-[400px] w-[320px] h-[40px] font-roboto text-xs bg-transparent border-black outline-none border-b-[1px]"
                  type="text"
                  name="firstName"
                />
                {errors.firstName && touched.firstName ? (
                  <div className="text-red-500 mt-2  font-roboto text-xs ">
                    {errors.firstName}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col mt-4">
                <label className="font-roboto text-xs" htmlFor="lastName">
                 LASTNAME
                </label>
                <Field
                  className="md:w-[400px] w-[320px] h-[40px] font-roboto text-xs bg-transparent border-black outline-none border-b-[1px]"
                  type="text"
                  name="lastName"
                />
                {errors.lastName && touched.lastName ? (
                  <div className="text-red-500 mt-2  font-roboto text-xs ">
                    {errors.lastName}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col mt-4">
                <label className="font-roboto text-xs" htmlFor="email">
                  EMAIL
                </label>
                <Field
                  className="md:w-[400px] w-[320px] h-[40px] font-roboto text-xs bg-transparent border-black outline-none border-b-[1px]"
                  type="text"
                  name="email"
                />
                {errors.email && touched.email ? (
                  <div className="text-red-500 mt-2  font-roboto text-xs ">
                    {errors.email}
                  </div>
                ) : null}
              </div>

              <div className="mt-4 bg-slate-50 drop-shadow-lg border-zinc-50 h-12 rounded-md hover:drop-shadow-xl flex">
                <div className="flex flex-col">
                  <label className="font-roboto text-xs" htmlFor="password">
                    PASSWORD
                  </label>
                  <div className="flex">
                    <Field
                      className="md:w-[400px] w-[320px] h-[40px] bg-transparent border-black outline-none border-b-[1px]  "
                      name="password"
                      type={`${hide ? "title" : "password"}`}
                    />
                    <h1
                      className="text-2xl cursor-pointer -ml-7 text-gray-500 "
                      onClick={() => setHide(!hide)}
                    >
                      {hide ? <FaEyeSlash /> : <FaEye />}
                    </h1>
                  </div>
                </div>
              </div>
              {errors.password && touched.password ? (
                <div className="text-red-500 mt-5 font-roboto text-xs ">
                  {errors.password}
                </div>
              ) : null}
              <button
                type="submit"
                className="md:w-[400px] w-[320px] mt-5 rounded-md bg-black text-white  h-12 font-roboto text-xs "
              >
                BECOME A MEMBER
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
