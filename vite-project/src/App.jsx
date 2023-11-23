import React, { useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./components/UserProvider";
import Login from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import Home from "./components/Home";

function FirstApp() {
  
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default FirstApp;
