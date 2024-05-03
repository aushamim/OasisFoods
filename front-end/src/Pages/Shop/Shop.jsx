import { useEffect, useState } from "react";
import useGlobalState from "../../Hooks/useGlobalState";
import Loader from "../../Components/Loader/Loader";
import Product from "../../Components/Product/Product";
import ProductQuickView from "../../Components/ProductQuickView/ProductQuickView";

const Shop = () => {
  const { allProducts, allProductsLoading, categories } = useGlobalState();
  const [active, setActive] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (active == 0) {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(
        allProducts?.filter((product) => product.category == active)
      );
    }
  }, [active, allProducts]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="mt-10 mb-28 grid grid-cols-4 gap-8">
      <div>
        <div className="border-b">
          <h1 className="text-3xl font-bold">Categories</h1>
          <span className="w-[4.2rem] h-1 bg-lime-500 block mt-2"></span>
        </div>
        <div className="mt-5">
          {allProductsLoading ? (
            <Loader />
          ) : (
            <>
              <button
                className={
                  active == 0
                    ? "w-full mt-2 font-medium text-lime-500 hover:text-lime-500 duration-300 text-start border-s-4 ps-1 border-lime-500"
                    : "w-full mt-2 font-medium text-gray-500 hover:text-lime-500 duration-300 text-start border-s-4 ps-1 border-transparent"
                }
                onClick={() => {
                  setActive(0);
                }}
              >
                All
              </button>
              {categories?.map((category) => (
                <button
                  key={category.id}
                  className={
                    active == `${category.id}`
                      ? "w-full mt-2 font-medium text-lime-500 hover:text-lime-500 duration-300 text-start border-s-4 ps-1 border-lime-500"
                      : "w-full mt-2 font-medium text-gray-500 hover:text-lime-500 duration-300 text-start border-s-4 ps-1 border-transparent"
                  }
                  onClick={() => {
                    setActive(category.id);
                  }}
                >
                  {category.name}
                </button>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="col-span-3 grid grid-cols-3 gap-7">
        <div className="col-span-3 border-b">
          <h1 className="text-3xl font-bold">
            {active == 0
              ? "All Products"
              : categories?.find((category) => category.id == active)?.name}
          </h1>
          <span className="w-[4.2rem] h-1 bg-lime-500 block mt-2"></span>
        </div>
        {filteredProducts?.length > 0 ? (
          <>
            {filteredProducts?.map((product) => (
              <Product key={product?.id} product={product}></Product>
            ))}
          </>
        ) : (
          <div className="p-10 col-span-3">
            <img
              className="w-16 mx-auto"
              src="/assets/images/food.png"
              alt="no foods"
            />
            <p className="text-center mt-2">No product in this category</p>
          </div>
        )}
      </div>

      <ProductQuickView></ProductQuickView>
    </div>
  );
};

export default Shop;
