/* eslint-disable react/prop-types */
const CartIndicator = ({ page }) => {
  return (
    <div className="flex gap-8 pr-8">
      <div className="w-1/3 relative z-30">
        <div
          className={
            page == "cart"
              ? "h-10 w-10 bg-white absolute rotate-45 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
              : "h-10 w-10 bg-white absolute rotate-45 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 border-r border-t border-gray-300"
          }
        ></div>
        <div
          className={
            page == "cart"
              ? "text-xl font-medium uppercase text-white bg-lime-500 h-14 flex items-center justify-center"
              : "text-xl font-medium uppercase text-gray-400 bg-white h-14 flex items-center justify-center border-y"
          }
        >
          Shopping Cart
        </div>
        <div
          className={
            page == "cart"
              ? "h-10 w-10 bg-lime-500 absolute rotate-45 right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
              : "h-10 w-10 bg-white absolute rotate-45 right-0 top-1/2 translate-x-1/2 -translate-y-1/2 border-r border-t border-gray-300"
          }
        ></div>
      </div>

      <div className="w-1/3 relative z-20">
        <div
          className={
            page == "checkout"
              ? "h-10 w-10 bg-white absolute rotate-45 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
              : "h-10 w-10 bg-white absolute rotate-45 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 border-r border-t border-gray-300"
          }
        ></div>
        <div
          className={
            page == "checkout"
              ? "text-xl font-medium uppercase text-white bg-lime-500 h-14 flex items-center justify-center"
              : "text-xl font-medium uppercase text-gray-400 bg-white h-14 flex items-center justify-center border-y"
          }
        >
          checkout
        </div>
        <div
          className={
            page == "checkout"
              ? "h-10 w-10 bg-lime-500 absolute rotate-45 right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
              : "h-10 w-10 bg-white absolute rotate-45 right-0 top-1/2 translate-x-1/2 -translate-y-1/2 border-r border-t border-gray-300"
          }
        ></div>
      </div>

      <div className="w-1/3 relative z-10">
        <div
          className={
            page == "order-complete"
              ? "h-10 w-10 bg-white absolute rotate-45 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
              : "h-10 w-10 bg-white absolute rotate-45 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 border-r border-t border-gray-300"
          }
        ></div>
        <div
          className={
            page == "order-complete"
              ? "text-xl font-medium uppercase text-white bg-lime-500 h-14 flex items-center justify-center"
              : "text-xl font-medium uppercase text-gray-400 bg-white h-14 flex items-center justify-center border-y"
          }
        >
          order complete
        </div>
        <div
          className={
            page == "order-complete"
              ? "h-10 w-10 bg-lime-500 absolute rotate-45 right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
              : "h-10 w-10 bg-white absolute rotate-45 right-0 top-1/2 translate-x-1/2 -translate-y-1/2 border-r border-t border-gray-300"
          }
        ></div>
      </div>
    </div>
  );
};

export default CartIndicator;
