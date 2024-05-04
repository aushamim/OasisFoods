import { Link } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import useGlobalState from "../../Hooks/useGlobalState";
import { toast } from "sonner";

const Cart = () => {
  const { user, cart, cartLoading, addToCart } = useGlobalState();
  const handleQuantity = (op, product, quantity) => {
    if (op == "+") {
      if (quantity <= 500) {
        addToCart(product, quantity + 1);
      } else {
        toast.warning("Maximum 100 quantity of one products can be purchased.");
      }
    }
    if (op == "-") {
      if (quantity > 1) {
        addToCart(product, quantity - 1);
      } else {
        toast.warning("Minimum one product is needed.");
      }
    }
  };
  return (
    <div className="mt-10">
      {user ? (
        <>
          {cartLoading ? (
            <Loader />
          ) : (
            <>
              <div>cart navs</div>
              <div className="mt-10 border rounded">
                <div className="grid grid-cols-8 gap-3 uppercase font-semibold text-center border-b p-3">
                  <h3>image</h3>
                  <h3 className="col-span-2 text-start">Product Name</h3>
                  <h3>Price</h3>
                  <h3>Quantity</h3>
                  <h3>Discount</h3>
                  <h3>Total</h3>
                  <h3>Action</h3>
                </div>
                <div>
                  {cart?.map((cart_item) => (
                    <div
                      key={cart_item?.id}
                      className="grid grid-cols-8 gap-3 p-3 items-center"
                    >
                      <div className="p-2 border rounded">
                        <img
                          className="max-h-28 mx-auto"
                          src={cart_item?.product?.image}
                          alt={cart_item?.product?.name}
                        />
                      </div>
                      <div className="col-span-2 font-semibold">
                        {cart_item?.product?.name}
                      </div>
                      <div className="font-semibold text-center">
                        ${cart_item?.product?.price}
                      </div>
                      <div className="font-semibold">
                        <div className="flex items-center border w-1/2 mx-auto pl-3 rounded">
                          <p className="flex-grow">{cart_item?.quantity}</p>
                          <div className="flex flex-col items-center justify-center">
                            <button
                              className="pr-2 hover:text-lime-500 duration-300"
                              onClick={() => {
                                handleQuantity(
                                  "+",
                                  cart_item?.product,
                                  cart_item?.quantity
                                );
                              }}
                            >
                              +
                            </button>
                            <button
                              className="pr-2 hover:text-lime-500 duration-300"
                              onClick={() => {
                                handleQuantity(
                                  "-",
                                  cart_item?.product,
                                  cart_item?.quantity
                                );
                              }}
                            >
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="font-semibold text-center">
                        {cart_item?.product?.discount}%
                      </div>
                      <div className="font-semibold text-center">
                        <p>
                          $
                          {(
                            (cart_item?.product?.price -
                              (cart_item?.product?.price *
                                cart_item?.product?.discount) /
                                100) *
                            cart_item?.quantity
                          ).toFixed(2)}
                          {cart_item?.product?.discount > 0 ? (
                            <>
                              {" "}
                              <span className="text-sm line-through text-gray-300">
                                $
                                {(
                                  cart_item?.product?.price *
                                  cart_item?.quantity
                                ).toFixed(2)}
                              </span>
                            </>
                          ) : (
                            ""
                          )}
                        </p>
                      </div>
                      <div className="flex items-center justify-center">
                        <button className="btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18 18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <h3 className="text-2xl font-medium text-center">
          Please{" "}
          <Link
            className="text-lime-500 hover:text-lime-600 duration-300"
            to="/login"
          >
            login
          </Link>{" "}
          to add product to cart.
        </h3>
      )}
    </div>
  );
};

export default Cart;
