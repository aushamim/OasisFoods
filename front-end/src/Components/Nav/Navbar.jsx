import { Link } from "react-router-dom";
import { toast } from "sonner";
import useGlobalState from "../../Hooks/useGlobalState";

const handleLogout = (token, APIHost, setUser) => {
  if (!token) {
    toast.error("User not logged in.");
    return;
  }

  const promise = () => {
    return fetch(`${APIHost}/user/logout/`, {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user_id");
          setUser(localStorage.getItem("user_id") || null);
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  toast.promise(promise, {
    loading: "Logging out. Please wait.",
    success: "Logged out successfully",
    error: (error) => {
      return error;
    },
  });
};

const Navbar = () => {
  const token = localStorage.getItem("token");
  const { APIHost, user, setUser } = useGlobalState();
  return (
    <div className="grid grid-cols-5 py-5 mb-5">
      <div className="text-3xl font-bold flex items-center">
        <Link to="/">
          <span className="text-orange-500">O</span>asisFoods
        </Link>
      </div>
      <div className="col-span-3 text-center font-semibold flex items-center justify-center">
        <Link
          to="/"
          className=" text-gray-500 hover:text-orange-500 duration-300"
        >
          Home
        </Link>
        <a
          href=""
          className="ml-5 text-gray-500 hover:text-orange-500 duration-300"
        >
          Shop
        </a>
        <Link
          to="/blog"
          className="ml-5 text-gray-500 hover:text-orange-500 duration-300"
        >
          Blog
        </Link>
        <a
          href=""
          className="ml-5 text-gray-500 hover:text-orange-500 duration-300"
        >
          About Us
        </a>
      </div>
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-1">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="bg-orange-200 hover:bg-orange-300 duration-500 p-2 rounded-full ring ring-orange-100 ring-inset"
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
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-10 menu p-2 shadow rounded-lg bg-base-100 border w-36 font-medium"
              >
                <li>
                  <button
                    onClick={() => {
                      toast.info("Coming Soon");
                    }}
                  >
                    Wishlist
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleLogout(token, APIHost, setUser);
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div
              className="tooltip tooltip-left tooltip-primary font-medium"
              style={{
                "--tooltip-color": "#fed7aa",
                "--tooltip-text-color": "#c2410c",
              }}
              data-tip="Login"
            >
              <Link
                to="/login"
                className="bg-orange-200 hover:bg-orange-300 duration-500 p-2 rounded-full block"
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-login-2 stroke-orange-700"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
                  <path d="M3 12h13l-3 -3" />
                  <path d="M13 15l3 -3" />
                </svg>
              </Link>
            </div>
          )}

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
            <p className="ml-3 font-semibold text-lime-700">$0.00</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
