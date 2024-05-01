import { useState } from "react";
import Product from "../Product/Product";
import useGlobalState from "../../Hooks/useGlobalState";

const Featured = () => {
  const { featuredProducts, featuredProductsLoading } = useGlobalState();
  const [active, setActive] = useState("All");

  return (
    <div className="mt-16">
      <div>
        <h1 className="text-5xl font-bold text-center">Featured Products</h1>
        <span className="w-20 h-1 bg-orange-300 block mx-auto mt-2"></span>
      </div>

      <div className="flex items-center justify-center mt-10 border-b">
        <button
          className={
            active === "All"
              ? "py-3 px-1 font-semibold border-orange-300 border-x-0 border-t-0 border-b-4 border text-orange-400"
              : "py-3 px-1 font-semibold text-gray-400"
          }
          onClick={() => {
            setActive("All");
          }}
        >
          All
        </button>
        <button
          className={
            active === "Fruits"
              ? "ml-5 py-3 px-1 font-semibold border-orange-300 border-x-0 border-t-0 border-b-4 border text-orange-400"
              : "ml-5 py-3 px-1 font-semibold text-gray-400"
          }
          onClick={() => {
            setActive("Fruits");
          }}
        >
          Fruits
        </button>
        <button
          className={
            active === "Bread"
              ? "ml-5 py-3 px-1 font-semibold border-orange-300 border-x-0 border-t-0 border-b-4 border text-orange-400"
              : "ml-5 py-3 px-1 font-semibold text-gray-400"
          }
          onClick={() => {
            setActive("Bread");
          }}
        >
          Bread
        </button>
        <button
          className={
            active === "Fastfood"
              ? "ml-5 py-3 px-1 font-semibold border-orange-300 border-x-0 border-t-0 border-b-4 border text-orange-400"
              : "ml-5 py-3 px-1 font-semibold text-gray-400"
          }
          onClick={() => {
            setActive("Fastfood");
          }}
        >
          Fastfood
        </button>
        <button
          className={
            active === "Ocean Foods"
              ? "ml-5 py-3 px-1 font-semibold border-orange-300 border-x-0 border-t-0 border-b-4 border text-orange-400"
              : "ml-5 py-3 px-1 font-semibold text-gray-400"
          }
          onClick={() => {
            setActive("Ocean Foods");
          }}
        >
          Ocean Foods
        </button>
      </div>

      {featuredProductsLoading ? (
        <div className="p-10 flex items-center justify-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <>
          {/* <div className="p-10">
            <img
              className="w-16 mx-auto"
              src="/assets/images/food.png"
              alt="no foods"
            />
            <p className="text-center mt-2">No product in this category</p>
          </div> */}

          <div className="mt-10 grid grid-cols-4 gap-7">
            {featuredProducts?.map((product) => (
              <Product
                key={product?.id}
                category={product?.category}
                name={product?.name}
                image={product?.image}
                price={parseFloat(product?.price)}
                discount={parseFloat(product?.discount)}
              ></Product>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
