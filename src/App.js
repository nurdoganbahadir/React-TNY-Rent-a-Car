import AuthProvider from "./context/AuthProvider";
import ProductProvider from "./context/ProductProvider";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AuthProvider>
        <ProductProvider>
          <AppRouter />
        </ProductProvider>
      </AuthProvider>
      <ToastContainer />
    </>
  );
}

export default App;
