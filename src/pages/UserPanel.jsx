import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/ProductProvider";
import Loading from "../components/Other/Loading";

const UserPanel = () => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteData(id);
  };
  const { loading } = useProductsContext();

  const { data, deleteData, setEdit } = useProductsContext();
  return (
    <div className="max-w-2xl mx-auto my-5 px-4">
      
      <div className="items-start justify-between sm:flex">
        <div>
          <h4 className="text-gray-800 text-xl font-semibold dark:text-white">
            Yönetici Paneli
          </h4>
          <p className="mt-2 text-gray-600 text-base sm:text-sm dark:text-white">
            Yeni araç girebilir, eski araçları düzenleyebilirsiniz.
          </p>
        </div>
        <a
          onClick={() => navigate("/userpanel/additem")}
          href="javascript:void(0)"
          className="inline-flex items-center justify-center gap-1 py-2 px-3 mt-2 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg sm:mt-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          Araç Ekle
        </a>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <ul className="mt-12 divide-y">
          {data?.map(
            ({ id, brand, model, year, gear, img, insurance, info, price }) => (
              <li key={id} className="py-5 flex items-start justify-between">
                <div className="flex gap-3">
                  <img src={img} className="flex-none w-12 h-12 rounded-full" />
                  <div>
                    <span className="block text-sm text-gray-700 font-semibold dark:text-white">
                      {brand}
                    </span>
                    <span className="block text-sm text-gray-600 dark:text-gray-400">
                      {year}
                    </span>
                  </div>
                </div>
                <div className="flex md:gap-4">
                  <button
                    onClick={() => handleDelete(id)}
                    className="text-gray-700 text-sm rounded-lg px-3 py-2 duration-150 bg-white hover:bg-gray-100 dark:bg-gray-300 dark:hover:bg-gray-100 float-end"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                  <a
                    onClick={() => {
                      navigate("/userpanel/putitem");
                      setEdit({
                        id,
                        brand,
                        model,
                        gear,
                        img,
                        insurance,
                        year,
                        info,
                        price,
                      });
                    }}
                    href="javascript:void(0)"
                    className="text-gray-700 text-sm  rounded-lg px-3 py-2 duration-150 bg-white hover:bg-gray-100 dark:bg-gray-300 dark:hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </a>
                </div>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default UserPanel;
