import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home";
import Error from "../components/Error/Error";
import ManagePanel from "../pages/ManagePanel";
import UserPanel from "../pages/UserPanel";
import PrivateRouter from "./PrivateRouter";
import AddItem from "../components/Other/AddItem";
import EditItem from "../components/Other/EditItem";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/managepanel" element={<ManagePanel />} />
        <Route path="*" element={<Error />} />
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
