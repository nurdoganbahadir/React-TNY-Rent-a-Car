import React from "react";
import { useContext } from "react";
import { createContext } from "react";

const ProductContext = createContext();

export const useProductsContext = () => {
  return useContext(ProductContext);
};

const ProductProvider = ({ children }) => {
  return <ProductContext.Provider>{children}</ProductContext.Provider>;
};

export default ProductProvider;
