const AddItem = () => {
  return (
    <>
      <form>
        <h1>Araç Ekleme Formu</h1>
        <div>
          <label htmlFor="">Araç Markası</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Araç Modeli</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Vites</label>
          <select id="gearType">
            <option value="">Seçiniz</option>
            <option value="Otomatik">Otomatik</option>
            <option value="Manuel">Manuel</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Kasko</label>
          <select id="insuranceType">
            <option value="">Seçiniz</option>
            <option value="Otomatik">Var</option>
            <option value="Manuel">Yok</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Araç Resmi</label>
          <p>Lütfen link olarak ekleyin.</p>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Araç Model Yılı</label>
          <input type="number" />
        </div>
        <div>
          <label htmlFor="">Açıklama</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Araç fiyatı</label>
          <input type="number" />
        </div>
      </form>
    </>
  );
};

export default AddItem;
