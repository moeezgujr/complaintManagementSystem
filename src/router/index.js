import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import { PrivateRoute, LoginRoute } from "../loginroute";
import Complaintlist from "../pages/complaintmanagement/complaintlist";

import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import AddUser from "../pages/usermanagement.js/adduser";
import EditUser from "../pages/usermanagement.js/edituser";

import Userlist from "../pages/usermanagement.js/userlist";
import "material-react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "material-react-toastify";
const Routing = () => {
  return (
    <Router>
      <ToastContainer />
      <Header />
      <Routes>
        {/* <LoginRoute path="/login" component={Login} /> */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/edituser/:id"
          element={
            <PrivateRoute>
              <EditUser />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          exact
          element={
            <LoginRoute>
              <Login />
            </LoginRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/complaintlist"
          element={
            <PrivateRoute>
              <Complaintlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/userlist"
          element={
            <PrivateRoute>
              <Userlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/adduser"
          element={
            <PrivateRoute>
              <AddUser />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default Routing;
