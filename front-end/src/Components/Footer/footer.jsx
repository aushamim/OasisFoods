const footer = () => {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-5">
        <div className="col-span-2">
          <h1 className="text-3xl font-bold mb-6">
            <span className="text-orange-500">O</span>asisFoods
          </h1>
          <p className="font-medium text-[#636363] mb-3">
            Address: Dhanmondi, Dhaka
          </p>
          <p className="font-medium text-[#636363] mb-3">
            Phone: +8801234567890
          </p>
          <p className="font-medium text-[#636363] mb-3">
            Email: oasis.foods@gmail.com
          </p>
        </div>

        <div>
          <p className="font-semibold mb-5 uppercase">Information</p>
          <a
            href=""
            className="font-medium text-[#636363] hover:text-orange-600 block duration-300 mb-3"
          >
            About Us
          </a>
          <a
            href=""
            className="font-medium text-[#636363] hover:text-orange-600 block duration-300 mb-3"
          >
            Check-out
          </a>
          <a
            href=""
            className="font-medium text-[#636363] hover:text-orange-600 block duration-300 mb-3"
          >
            Services
          </a>
          <a
            href=""
            className="font-medium text-[#636363] hover:text-orange-600 block duration-300 mb-3"
          >
            Contact
          </a>
        </div>

        <div>
          <p className="font-semibold mb-5 uppercase">Account</p>
          <a
            href=""
            className="font-medium text-[#636363] hover:text-orange-600 block duration-300 mb-3"
          >
            My Account
          </a>
          <a
            href=""
            className="font-medium text-[#636363] hover:text-orange-600 block duration-300 mb-3"
          >
            Shop Cart
          </a>
          <a
            href=""
            className="font-medium text-[#636363] hover:text-orange-600 block duration-300 mb-3"
          >
            Update Information
          </a>
          <a
            href=""
            className="font-medium text-[#636363] hover:text-orange-600 block duration-300 mb-3"
          >
            Track Order
          </a>
        </div>

        <div>
          <p className="font-semibold mb-5 uppercase">Quick Shop</p>
          <a
            href=""
            className="font-medium text-[#636363] hover:text-orange-600 block duration-300 mb-3"
          >
            Browse Shop
          </a>
          <a
            href=""
            className="font-medium text-[#636363] hover:text-orange-600 block duration-300 mb-3"
          >
            Deal of the Week
          </a>
          <a
            href=""
            className="font-medium text-[#636363] hover:text-orange-600 block duration-300 mb-3"
          >
            Summer Sale
          </a>
          <a
            href=""
            className="font-medium text-[#636363] hover:text-orange-600 block duration-300 mb-3"
          >
            Special Discount
          </a>
        </div>
      </div>

      <div className="grid grid-cols-4 py-10 border-b-8 border-lime-500">
        <div className="col-span-3 font-medium text-[#636363]">
          Copyright © 2024 OasisFoods - All Rights Reserved.
        </div>
        <div>
          <img
            className="w-full"
            src="assets/images/payment.png"
            alt="payment methods"
          />
        </div>
      </div>
    </div>
  );
};

export default footer;
