import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const PrivateRouter = () => {
  const { user } = useContext(AuthContext);
  return user ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/managepanel" />
  );
};

export default PrivateRouter;
