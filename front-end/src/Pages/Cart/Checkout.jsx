import { useEffect } from "react";
import CartIndicator from "../../Components/CartIndicator/CartIndicator";
import useGlobalState from "../../Hooks/useGlobalState";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const handlePlaceOrder = (APIHost, user, cartRefresh, navigate) => {
  const promise = () => {
    return fetch(`${APIHost}/products/cart/?user_id=${user}&complete_order`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        } else {
          cartRefresh();
          navigate("/cart/order-complete");
          return data;
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  toast.promise(promise, {
    loading: "Placing Order",
    success: "Order Placed Successfully",
    error: (error) => {
      return error;
    },
  });
};

const Checkout = () => {
  const { APIHost, user, cart, cartTotalPrice, cartRefresh } = useGlobalState();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <CartIndicator page="checkout" />

      <div className="mt-14 grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <h3 className="text-lg font-semibold">Billing Details</h3>
          <div className="mt-5">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full mb-5"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full mb-5"
            />
            <input
              type="text"
              placeholder="Phone No."
              className="input input-bordered w-full mb-5"
            />
            <input
              type="text"
              placeholder="Address"
              className="input input-bordered w-full mb-5"
            />
            <textarea
              className="textarea textarea-bordered w-full"
              rows={5}
              placeholder="Order Notes (optional)"
            ></textarea>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Order Summary</h3>
          <div className="mt-5 border-y py-3">
            {cart?.map((cart_item) => (
              <div key={cart_item?.id} className="grid grid-cols-5 py-1">
                <p className="col-span-3">{cart_item?.product?.name}</p>
                <p className="text-center">x {cart_item?.quantity}</p>
                <p className="text-end">
                  $
                  {(
                    (cart_item?.product?.price -
                      (cart_item?.product?.price *
                        cart_item?.product?.discount) /
                        100) *
                    cart_item?.quantity
                  ).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
          <div className="py-3">
            <div className="grid grid-cols-2 py-2 font-semibold">
              <p>Subtotal</p>
              <p className="text-end">${cartTotalPrice}</p>
            </div>
            <div className="grid grid-cols-2 py-2 font-semibold">
              <p>Shipping</p>
              <p className="text-end">Free</p>
            </div>
            <div className="grid grid-cols-2 py-2 font-semibold">
              <p>Total</p>
              <p className="text-end">${cartTotalPrice}</p>
            </div>
          </div>
          <div className="mt-2">
            <button
              className="btn btn-success w-full uppercase text-white tracking-wide"
              onClick={() => {
                handlePlaceOrder(APIHost, user, cartRefresh, navigate);
              }}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
