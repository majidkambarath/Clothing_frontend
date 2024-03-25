import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/User/HomePage";
import LoginPage from "../../pages/User/LoginPage";
import RegisterPage from "../../pages/User/RegisterPage";
import AccountPage from "../../pages/User/MyAccount/AccountPage";
import PurchasePage from "../../pages/User/MyAccount/PurchasePage";
import SettingPage from "../../pages/User/MyAccount/SettingPage";
import SettingEdit from "../../pages/User/MyAccount/SettingEdit";
import AddressEdit from "../../pages/User/MyAccount/AddressEdit";
import ProductPage from "../../pages/User/ProductPage";

export default function UserRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/purchase" element={<PurchasePage />} />
      <Route path="/settings" element={<SettingPage />} />
      <Route path="/account/editdetails" element={<SettingEdit />} />
      <Route path="/account/addressbook" element={<AddressEdit />} />
      <Route path="/product/:item" element={<ProductPage />} />
    </Routes>
  );
}