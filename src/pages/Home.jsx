import { useProductsContext } from "../context/ProductProvider";

const Home = () => {
  const { data } = useProductsContext();

  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xl md:px-8">
      <div className="text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Hoşgeldiniz, araçlarımıza bir göz atmaya ne dersiniz?
        </h1>
        <p className="mt-3 text-gray-500">
          Araçlarımız her zaman hazır ve nazır bir şekilde siz değerli
          müşterilerimizi beklemektedir.
        </p>
      </div>
      <div className="my-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((items) => (
          <article
            className="max-w-md w-[350px] mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
            key={items.id}
          >
            <a>
              <img
                src={items.img}
                loading="lazy"
                alt={items.id}
                className="w-full h-48 rounded-t-md"
              />
              <div className="flex justify-between items-center mt-2 pt-3 ml-4 mr-2">
                <div className="">Günlük {items.price}₺</div>
                <div className="ml-3">
                  <span className="block text-gray-900 float-end">
                    {items.year}
                  </span>
                  <span className="block text-gray-400 text-sm">
                    {items.gear}
                  </span>
                </div>
              </div>
              <div className="pt-3 ml-4 mr-2 mb-3">
                <h3 className="text-xl text-gray-900 uppercase">
                  {items.brand}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{items.model}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Home;
