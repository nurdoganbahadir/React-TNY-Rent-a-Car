import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
import Error from "../components/Error/Error";
import ManagePanel from "../pages/ManagePanel";
import UserPanel from "../pages/UserPanel";
import PrivateRouter from "./PrivateRouter";
import AddItem from "../components/Other/AddItem";
import EditItem from "../components/Other/EditItem";
import Footer from "../components/Footer/Footer";
import { useRef } from "react";
import About from "../pages/About";

const AppRouter = () => {
  const footerRef = useRef(null);
  return (
    <>
      <Navbar footerRef={footerRef} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/managepanel" element={<ManagePanel />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route element={<PrivateRouter />}>
          <Route path="/userpanel" element={<UserPanel />} />
          <Route path="/userpanel/additem" element={<AddItem />} />
          <Route path="/userpanel/putitem" element={<EditItem />} />
        </Route>
      </Routes>
      <Footer ref={footerRef} />
    </>
  );
};

export default AppRouter;
