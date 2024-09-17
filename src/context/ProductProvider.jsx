import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProductContext = createContext();

export const useProductsContext = () => {
  return useContext(ProductContext);
};

const ProductProvider = ({ children }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState("");

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

  //! delete işlemi
  const deleteData = async (id) => {
    await axios.delete(`https://66e42f40d2405277ed136991.mockapi.io/tny/${id}`);
    getData();
  };

  //!put-edit işlemi
  const putData = async (edit) => {
    await axios.put(
      `https://66e42f40d2405277ed136991.mockapi.io/tny/${edit.id}`,
      edit
    );
    getData();
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  const values = {
    data,
    setData,
    postData,
    deleteData,
    putData,
    setEdit,
    edit,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
