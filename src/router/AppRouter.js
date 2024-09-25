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
      {/* Navbar ve Footer sadece PrivateRouter dışında gösterilecek */}
      <Routes>
        {/* Navbar ve Footer gösterilecek rotalar */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer ref={footerRef} />
            </>
          }
        />
        <Route
          path="/managepanel"
          element={
            <>
              <ManagePanel />
              <Footer ref={footerRef} />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
              <Footer ref={footerRef} />
            </>
          }
        />
        {/* Hatalı rotalarda Navbar ve Footer gösterilmesin */}
        <Route path="*" element={<Error />} />

        {/* PrivateRouter içine Navbar ve Footer eklenmedi */}
        <Route element={<PrivateRouter />}>
          <Route path="/userpanel" element={<UserPanel />} />
          <Route path="/userpanel/additem" element={<AddItem />} />
          <Route path="/userpanel/putitem" element={<EditItem />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
