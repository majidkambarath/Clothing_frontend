import React, { useRef, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { loginSchema } from "../../schema/AuthSchema";
// import { toast } from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
export default function LoginForm() {
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
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          console.log(values);
          navigate("/");
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mt-10 pl-10 md:pl-0">
              <div className="flex flex-col">
                <label className="font-roboto text-xs" htmlFor="email">
                  EMAIL
                </label>
                <Field
                  innerRef={inputRef}
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

              <h1 className="font-roboto text-xs mt-5 cursor-pointer">
                FORGOT YOUR PASSWORD?
              </h1>

              <button
                type="submit"
                className="md:w-[400px] w-[320px] mt-5 rounded-md bg-black text-white  h-12 font-roboto text-xs "
              >
                SIGN IN
              </button>
              <Link to={"/register"}>
                <h1 className="font-roboto text-xs mt-5 cursor-pointer ml-24  md:ml-36">
                  BECOME A MEMBER
                </h1>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
