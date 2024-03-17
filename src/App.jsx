import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Toastify from './components/Toastify/Toastify';
import UserRouter from './routers/UserRouter/index';

function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
          <Route path={"/*"} element={<UserRouter />} />
        </Routes>
      </BrowserRouter>
      <Toastify />
    </>
  )
}

export default App