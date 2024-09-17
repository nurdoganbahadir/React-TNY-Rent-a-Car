import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";
import { useEffect } from "react";

const ProductContext = createContext();

export const useProductsContext = () => {
  return useContext(ProductContext);
};

const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);

  //!datayı burada çekiyoruz
  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://66e42f40d2405277ed136991.mockapi.io/tny"
      );
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  //! post işlemi
  const postData = async (postinfo) => {
    try {
      await axios.post(
        "https://66e42f40d2405277ed136991.mockapi.io/tny",
        postinfo
      );
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  const values = { data, setData, postData };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
