import { useEffect, useState } from "react";
import Product from "../Product/Product";
import useGlobalState from "../../Hooks/useGlobalState";
import Loader from "../Loader/Loader";

const BestSeller = () => {
  const { bestSellerProducts, bestSellerProductsLoading, categories } =
    useGlobalState();
  const [active, setActive] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (active == 0) {
      setFilteredProducts(bestSellerProducts);
    } else {
      setFilteredProducts(
        bestSellerProducts?.filter((product) => product.category.id == active)
      );
    }
  }, [active, bestSellerProducts]);

  return (
    <div className="mt-16">
      <div className="grid grid-cols-3 border-b">
        <h1 className="text-5xl font-bold">Best Seller</h1>
        <div className="col-span-2 flex justify-end">
          {categories ? (
            <button
              className={
                active === 0
                  ? "py-3 px-1 font-semibold border-orange-300 border-x-0 border-t-0 border-b-4 border text-orange-400"
                  : "py-3 px-1 font-semibold text-gray-400"
              }
              onClick={() => {
                setActive(0);
              }}
            >
              All
            </button>
          ) : (
            ""
          )}
          {categories?.map((category) => (
            <button
              key={category.id}
              className={
                active == `${category.id}`
                  ? "ml-5 py-3 px-1 font-semibold border-orange-300 border-x-0 border-t-0 border-b-4 border text-orange-400"
                  : "ml-5 py-3 px-1 font-semibold text-gray-400"
              }
              onClick={() => {
                setActive(category.id);
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {bestSellerProductsLoading ? (
        <Loader />
      ) : (
        <>
          {filteredProducts?.length > 0 ? (
            <div className="mt-10 grid grid-cols-4 gap-7">
              {filteredProducts?.map((product) => (
                <Product key={product?.id} product={product}></Product>
              ))}
            </div>
          ) : (
            <div className="p-10">
              <img
                className="w-16 mx-auto"
                src="/assets/images/food.png"
                alt="no foods"
              />
              <p className="text-center mt-2">No product in this category</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BestSeller;
