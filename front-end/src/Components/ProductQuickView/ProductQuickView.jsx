import useGlobalState from "../../Hooks/useGlobalState";

const ProductQuickView = () => {
  const { productQuickView, addToCart } = useGlobalState();
  return (
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
  );
};

export default ProductQuickView;
