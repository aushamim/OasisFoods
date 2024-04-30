const nav = () => {
  return (
    <div className="grid grid-cols-5 py-5 mb-5">
      <div className="text-3xl font-bold flex items-center">
        <span className="text-orange-500">O</span>asisFoods
      </div>
      <div className="col-span-3 text-center font-semibold flex items-center justify-center">
        <a
          className=" text-gray-500 hover:text-orange-500 duration-300"
          href=""
        >
          Home
        </a>
        <a
          className="ml-5 text-gray-500 hover:text-orange-500 duration-300"
          href=""
        >
          Shop
        </a>
        <a
          className="ml-5 text-gray-500 hover:text-orange-500 duration-300"
          href=""
        >
          Blog
        </a>
        <a
          className="ml-5 text-gray-500 hover:text-orange-500 duration-300"
          href=""
        >
          About Us
        </a>
        <a
          className="ml-5 text-gray-500 hover:text-orange-500 duration-300"
          href=""
        >
          Login
        </a>
      </div>
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-3">
          <a
            className="bg-orange-200 hover:bg-orange-300 duration-500 p-2 rounded-full"
            href=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-user stroke-orange-700"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </a>
          <a
            className="flex items-center bg-lime-100 hover:bg-lime-200 duration-500 p-1 pr-4 rounded-full"
            href=""
          >
            <div className="bg-lime-300 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart stroke-lime-700"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M17 17h-11v-14h-2" />
                <path d="M6 5l14 1l-1 7h-13" />
              </svg>
            </div>
            <p className="ml-3 font-semibold">$0.00</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default nav;
