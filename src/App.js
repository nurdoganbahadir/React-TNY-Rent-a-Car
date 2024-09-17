import AuthProvider from "./context/AuthProvider";
import ProductProvider from "./context/ProductProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <AppRouter />
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
