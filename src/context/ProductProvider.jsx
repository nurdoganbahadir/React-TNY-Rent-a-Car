import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const ProductContext = createContext();

export const useProductsContext = () => {
  return useContext(ProductContext);
};

const ProductProvider = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState("");

  useEffect(() => {
    if (!user && window.location.pathname.includes("/userpanel")) {
      navigate("/managepanel");
    }
  }, [user, navigate]);

  //!datayı burada çekiyoruz
  const getData = async () => {
    try {
      const { data } = await axios.get(
        "https://66e42f40d2405277ed136991.mockapi.io/tny"
      );
      setData(data);
    } catch (error) {
      toastErrorNotify("Başarısız oldu.");
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
      toastSuccessNotify("Yeni araç başarıyla eklendi.");
    } catch (error) {
      toastErrorNotify("Başarısız oldu.");
    }
  };

  //! delete işlemi
  const deleteData = async (id) => {
    await axios.delete(`https://66e42f40d2405277ed136991.mockapi.io/tny/${id}`);
    getData();
    toastSuccessNotify("Silme işlemi başarıyla gerçekleşti.");
  };

  //!put-edit işlemi
  const putData = async (edit) => {
    await axios.put(
      `https://66e42f40d2405277ed136991.mockapi.io/tny/${edit.id}`,
      edit
    );
    getData();
    toastSuccessNotify("Araç bilgileri başarıyla güncellendi");
  };

  useEffect(() => {
    getData();
  }, []);

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
