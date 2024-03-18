import React from "react";
import Header from "../../layout/Header/Header";
import LoginForm from "./Form";
import Footer from '../../layout/Footer/Footer'
export default function Login() {
  return (
    <>
      <Header />
      <div className="bg-custom w-full md:pl-[500px]  min-h-screen">
        <h1 className="md:pt-16 pt-12  font-roboto text-xs pl-44 text-gray-500  ">LOGIN</h1>
        <LoginForm />
      </div>
      <Footer/>
    </>
  );
}
