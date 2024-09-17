import { useState } from "react";
import { useProductsContext } from "../../context/ProductProvider";

const AddItem = () => {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    gear: "",
    insurance: "",
    img: "",
    year: "",
    info: "",
    price: "",
  });
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(formData);
  };

  const { data, setData, postData } = useProductsContext();

  return (
    <>
      <form onSubmit={handleSubmit} className=" md:w-[50%] mx-auto my-5 p-4">
        <h1 className="text-center text-2xl underline dark:text-white">
          Araç Ekleme Formu
        </h1>
        <div className="flex flex-col mt-5">
          <label htmlFor="brand" className="dark:text-white">
            Araç Markası
          </label>
          <input
            className="rounded-full"
            name="brand"
            type="text"
            placeholder="ör: renault"
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="model" className="dark:text-white">
            Araç Modeli
          </label>
          <input
            className="rounded-full"
            name="model"
            type="text"
            placeholder="ör: clio"
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="gear" className="dark:text-white">
            Vites
          </label>
          <select
            className="rounded-full"
            name="gear"
            id="gearType"
            required
            onChange={handleChange}
          >
            <option value="">Seçiniz</option>
            <option value="Otomatik">Otomatik</option>
            <option value="Manuel">Manuel</option>
          </select>
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="insuranceType" className="dark:text-white">
            Kasko
          </label>
          <select
            className="rounded-full"
            name="insurance"
            id="insuranceType"
            required
            onChange={handleChange}
          >
            <option value="">Seçiniz</option>
            <option value="Otomatik">Var</option>
            <option value="Manuel">Yok</option>
          </select>
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="img" className="dark:text-white">
            Araç Resmi
          </label>
          <p className="text-sm text-gray-500">Lütfen link olarak ekleyin.</p>
          <input
            className="rounded-full"
            name="img"
            type="text"
            placeholder="https://deneme.com/static/img/logos/deneme.jpg"
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="year" className="dark:text-white">
            Araç Model Yılı
          </label>
          <input
            className="rounded-full"
            name="year"
            type="number"
            placeholder="2017"
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="info" className="dark:text-white">
            Açıklama
          </label>
          <input
            className="rounded-full"
            name="info"
            type="text"
            placeholder="Araç detaylı açıklaması"
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="price" className="dark:text-white">
            Araç fiyatı
          </label>
          <input
            className="rounded-full"
            name="price"
            type="number"
            placeholder="1500"
            required
            onChange={handleChange}
          />
        </div>
        <button className="bg-primary-color text-white my-5 py-2 px-4 rounded-full hover:bg-secondary-color hover:outline hover:outline-light-red float-end">
          Gönder
        </button>
      </form>
    </>
  );
};

export default AddItem;
