import { useEffect } from "react";
import CartIndicator from "../../Components/CartIndicator/CartIndicator";
import { Link } from "react-router-dom";

const OrderComplete = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <CartIndicator page="order-complete" />
      <div className="mt-16">
        <h1 className="text-5xl text-center font-semibold">
          Order Placed Successfully
        </h1>
        <div className="flex justify-center mt-10">
          <Link to="/" className="btn uppercase">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
