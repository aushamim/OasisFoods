/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sale = ({ saleName, saleEnd, image }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const targetTime = new Date(saleEnd).getTime();
    const timeDifference = targetTime - now;

    if (timeDifference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div
      className="mt-16 py-10 px-20 h-96 rounded-lg bg-no-repeat bg-cover bg-center grid grid-cols-2 items-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div>
        <h1 className="text-5xl font-semibold text-center">
          <span className="capitalize">{saleName}</span> Sale
        </h1>
        <p className="text-center mt-2">
          Grab fresh fruits from our{" "}
          <span className="lowercase">{saleName}</span> collection while
          available
        </p>

        <div className="mt-7">
          <div className="w-2/3 mx-auto grid grid-cols-4 gap-5">
            <div className="bg-white py-3 px-2 rounded-lg text-center">
              <h1>
                <span className="countdown text-4xl font-semibold">
                  <span style={{ "--value": timeRemaining.days }}></span>
                </span>
              </h1>
              <p className="text-sm font-semibold mt-2 text-gray-600">DAYS</p>
            </div>
            <div className="bg-white py-3 px-2 rounded-lg text-center">
              <h1>
                <span className="countdown text-4xl font-semibold">
                  <span style={{ "--value": timeRemaining.hours }}></span>
                </span>
              </h1>
              <p className="text-sm font-semibold mt-2 text-gray-600">HR</p>
            </div>
            <div className="bg-white py-3 px-2 rounded-lg text-center">
              <h1>
                <span className="countdown text-4xl font-semibold">
                  <span style={{ "--value": timeRemaining.minutes }}></span>
                </span>
              </h1>
              <p className="text-sm font-semibold mt-2 text-gray-600">MIN</p>
            </div>
            <div className="bg-white py-3 px-2 rounded-lg text-center">
              <h1>
                <span className="countdown text-4xl font-semibold">
                  <span style={{ "--value": timeRemaining.seconds }}></span>
                </span>
              </h1>
              <p className="text-sm font-semibold mt-2 text-gray-600">SEC</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center">
          <Link
            to="/shop"
            className="bg-lime-400 text-lime-700 px-4 py-2 rounded-full font-medium uppercase"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Sale;
