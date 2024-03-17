import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/User/HomePage";
export default function UserRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
     
    </Routes>
  );
}