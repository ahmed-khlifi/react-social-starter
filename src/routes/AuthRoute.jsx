import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AuthRoute = () => {
  const token = localStorage.getItem("token");
  return token ? (
    <Navigate to="/" />
  ) : (
    <Routes>
      <Route index element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
};

export default AuthRoute;
