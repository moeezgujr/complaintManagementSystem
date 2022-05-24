// import { AUTH_TOKEN } from 'constants/constant'
import { any } from "prop-types";
import React from "react";
import { Navigate, Route } from "react-router-dom";
// import Login from "../src/pages/login/index";
export const PrivateRoute = ({ children }) => {
  const isUserLogged = JSON.parse(localStorage.getItem("user")) ? true : false;
  const time = JSON.parse(localStorage.getItem("user"))?.data?.uniqueToken
    .expiresAt;
  const expiryTime = new Date(time).toLocaleString("en-sg");
  const currentTime = new Date().toLocaleString("en-sg");
  if (expiryTime < currentTime) {
    localStorage.clear();
    return <Navigate to="/login" />;
  } else if (isUserLogged) {
    return children;
  } else if (!isUserLogged) {
    return <Navigate to="/login" />;
  }
};

export const LoginRoute = ({ children }) => {
  const isUserLogged = JSON.parse(localStorage.getItem("user")) ? true : false;
  return !isUserLogged ? children : <Navigate to="/" />;
};
