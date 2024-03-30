import React from "react";
import Header from "../../layout/Navbar/SubNavbar";
import LoginForm from "./Form";
import Footer from "../../layout/Footer/Footer";
export default function Login() {
  return (
    <>
      <Header />
      <div className="bg-custom w-full  pt-16  h-full  md: min-h-screen">
        <div>
          <h1 className="md:pt-16 pt-12 flex justify-center  font-roboto text-xs  text-gray-500  ">
            LOGIN
          </h1>
        </div>

        <div className="md:flex justify-center">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </>
  );
}
