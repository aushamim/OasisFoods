import { Link } from "react-router-dom";

const ProfileNav = () => {
  return (
    <div>
      <div className="flex-grow">
        <h1 className="text-2xl font-bold">&nbsp;</h1>
        <span className="w-20 h-1 bg-lime-500 block mt-2"></span>
      </div>
      <table className="mt-5">
        <Link
          to="/profile"
          className="w-full mb-2 font-medium hover:text-lime-500 duration-300 text-start block"
        >
          Profile
        </Link>
        <button className="w-full mb-2 font-medium hover:text-lime-500 duration-300 text-start block">
          Edit Information
        </button>
        <button className="w-full mb-2 font-medium hover:text-lime-500 duration-300 text-start block">
          Change Password
        </button>
        <Link
          to="/wishlist"
          className="w-full mb-2 font-medium hover:text-lime-500 duration-300 text-start block"
        >
          Wishlist
        </Link>
        <Link
          to="/my-orders"
          className="w-full mb-2 font-medium hover:text-lime-500 duration-300 text-start block"
        >
          My Orders
        </Link>
      </table>
    </div>
  );
};

export default ProfileNav;
