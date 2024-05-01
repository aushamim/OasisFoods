import { Link } from "react-router-dom";

const FourOFour = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-9xl font-bold">404</h1>
      <h1 className="text-3xl font-bold">Page Not Found</h1>
      <Link to="/" className="mt-5 block hover:text-orange-500 duration-300">
        Return to Home
      </Link>
    </div>
  );
};

export default FourOFour;
