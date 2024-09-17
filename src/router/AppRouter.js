import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
import Error from "../components/Error/Error";
import ManagePanel from "../pages/ManagePanel";
import UserPanel from "../pages/UserPanel";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/managepanel" element={<ManagePanel />} />
        <Route path="*" element={<Error />} />
        <Route path="" element={<PrivateRouter />}>
          <Route path="/userpanel" element={<UserPanel />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
