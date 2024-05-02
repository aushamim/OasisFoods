import BestSeller from "../../Components/BestSeller/BestSeller";
import Featured from "../../Components/Featured/Featured";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Sale from "../../Components/Sale/Sale";
import Partners from "../../Components/Partners/Partners";
import Blogs from "../../Components/Blogs/Blogs";
import useGlobalState from "../../Hooks/useGlobalState";

const HomePage = () => {
  const { productQuickView, addToCart } = useGlobalState();
  return (
    <div>
      <HeroSection></HeroSection>
      <Featured></Featured>

      <div className="mt-16 flex rounded-lg overflow-hidden">
        <div className="h-72 p-5 bg-red-300 flex-grow duration-300 hover:flex-grow-[5] bg-[url(/assets/images/intro-bg-1.png)] bg-no-repeat bg-cover group overflow-hidden">
          <img
            className="w-72 h-52 group-hover:w-56 group-hover:h-40 mx-auto duration-300"
            src="/assets/images/intro-item-1.png"
            alt=""
          />
          <div className="mt-16 group-hover:mt-10 flex justify-center">
            <button className="text-sm uppercase font-semibold text-lime-700 px-3 py-2 rounded-full bg-lime-400 shadow">
              Shop Now
            </button>
          </div>
        </div>
        <div className="h-72 p-5 bg-green-300 flex-grow duration-300 hover:flex-grow-[5] bg-[url(/assets/images/intro-bg-2.png)] bg-no-repeat bg-cover group overflow-hidden">
          <img
            className="w-72 h-52 group-hover:w-52 group-hover:h-40 mx-auto duration-300"
            src="/assets/images/intro-item-2.png"
            alt=""
          />
          <div className="mt-16 group-hover:mt-10 flex justify-center">
            <button className="text-sm uppercase font-semibold text-lime-700 px-3 py-2 rounded-full bg-lime-400 shadow">
              Shop Now
            </button>
          </div>
        </div>
        <div className="h-72 p-5 bg-blue-300 flex-grow duration-300 hover:flex-grow-[5] bg-[url(/assets/images/intro-bg-3.png)] bg-no-repeat bg-cover group overflow-hidden">
          <img
            className="w-72 h-52 group-hover:w-52 group-hover:h-40 mx-auto duration-300"
            src="/assets/images/intro-item-3.png"
            alt=""
          />
          <div className="mt-16 group-hover:mt-10 flex justify-center">
            <button className="text-sm uppercase font-semibold text-lime-700 px-3 py-2 rounded-full bg-lime-400 shadow">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <BestSeller></BestSeller>
      <Sale
        saleName={"Summer"}
        saleEnd={"2024-05-10T00:00:00"}
        image={"https://i.ibb.co/StzdWS5/sale-default.png"}
      ></Sale>
      <Blogs></Blogs>
      <Partners></Partners>

      {/* Modal */}
      <dialog id="product-quick-view" className="modal">
        <div className="modal-box w-1/2 max-w-5xl rounded-lg relative">
          <div className="grid grid-cols-2 gap-5 items-center">
            <div className="border rounded-lg max-h-96 p-5 overflow-hidden">
              <img
                className="w-full h-full object-contain mx-auto"
                src={productQuickView?.image}
                alt={productQuickView?.name}
              />
            </div>
            <div className="">
              <p
                className={`uppercase text-sm font-medium text-${productQuickView?.category_color}-500`}
              >
                {productQuickView?.category_name}
              </p>
              <p className="mt-2 font-semibold text-3xl">
                {productQuickView?.name}
              </p>
              <p className="mt-3 font-semibold text-xl">
                {parseFloat(productQuickView?.discount) > 0 ? (
                  <>
                    {" "}
                    <span className="text-sm line-through text-gray-300">
                      ${parseFloat(productQuickView?.price).toFixed(2)}
                    </span>{" "}
                    <br />
                  </>
                ) : (
                  ""
                )}
                $
                {(
                  parseFloat(productQuickView?.price) -
                  (parseFloat(productQuickView?.price) *
                    parseFloat(productQuickView?.discount)) /
                    100
                ).toFixed(2)}
              </p>
              <div className="mt-5 rating">
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  name="rating-4"
                  className="mask mask-star-2 bg-green-500"
                />
              </div>
              <div>
                <button
                  className="mt-5 btn uppercase"
                  onClick={() => {
                    addToCart(productQuickView);
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>

            {console.log(productQuickView)}
          </div>

          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => {
              document.getElementById("product-quick-view-close").click();
            }}
          >
            ✕
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button id="product-quick-view-close">close</button>
        </form>
      </dialog>
      {/* Modal */}
    </div>
  );
};

export default HomePage;
