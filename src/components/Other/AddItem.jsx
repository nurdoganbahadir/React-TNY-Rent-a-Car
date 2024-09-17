const AddItem = () => {
  return (
    <>
      <form className=" md:w-[50%] mx-auto my-5 p-4">
        <h1 className="text-center text-2xl underline dark:text-white">
          Araç Ekleme Formu
        </h1>
        <div className="flex flex-col mt-5">
          <label htmlFor="brand" className="dark:text-white">
            Araç Markası
          </label>
          <input
            className="rounded-full"
            type="text"
            placeholder="ör: renault"
            required
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="model" className="dark:text-white">
            Araç Modeli
          </label>
          <input
            className="rounded-full"
            type="text"
            placeholder="ör: clio"
            required
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="gear" className="dark:text-white">
            Vites
          </label>
          <select className="rounded-full" id="gearType" required>
            <option value="">Seçiniz</option>
            <option value="Otomatik">Otomatik</option>
            <option value="Manuel">Manuel</option>
          </select>
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="insuranceType" className="dark:text-white">
            Kasko
          </label>
          <select className="rounded-full" id="insuranceType" required>
            <option value="">Seçiniz</option>
            <option value="Otomatik">Var</option>
            <option value="Manuel">Yok</option>
          </select>
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="image" className="dark:text-white">
            Araç Resmi
          </label>
          <p className="text-sm text-gray-500">Lütfen link olarak ekleyin.</p>
          <input
            className="rounded-full"
            type="text"
            placeholder="https://deneme.com/static/img/logos/deneme.jpg"
            required
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="year" className="dark:text-white">
            Araç Model Yılı
          </label>
          <input
            className="rounded-full"
            type="number"
            placeholder="2017"
            required
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="info" className="dark:text-white">
            Açıklama
          </label>
          <input
            className="rounded-full"
            type="text"
            placeholder="Araç detaylı açıklaması"
            required
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="price" className="dark:text-white">
            Araç fiyatı
          </label>
          <input
            className="rounded-full"
            type="number"
            placeholder="1500"
            required
          />
        </div>
        <button className="bg-primary-color text-white mt-5 py-2 px-4 rounded-full hover:bg-secondary-color hover:outline hover:outline-light-red float-end">
          Gönder
        </button>
      </form>
    </>
  );
};

export default AddItem;
