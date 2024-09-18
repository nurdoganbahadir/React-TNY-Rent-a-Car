import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return user ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/managepanel" />
  );
};

export default PrivateRouter;
