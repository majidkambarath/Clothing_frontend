import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/User/HomePage";
import LoginPage from "../../pages/User/LoginPage";
import RegisterPage from "../../pages/User/RegisterPage";
export default function UserRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}