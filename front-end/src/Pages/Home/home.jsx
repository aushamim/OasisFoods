import BestSeller from "../../Components/BestSeller/BestSeller";
import Featured from "../../Components/Featured/Featured";
import HeroSection from "../../Components/HeroSection/HeroSection";

const home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Featured></Featured>

      <div className="mt-16 flex">
        <div className="h-72 p-5 bg-red-300 flex-grow duration-300 hover:flex-grow-[5] bg-[url(/assets/images/intro-bg-1.png)] bg-no-repeat bg-cover group overflow-hidden">
          <img
            className="w-72 h-52 group-hover:w-56 group-hover:h-40 mx-auto duration-300"
            src="/assets/images/intro-item-1.png"
            alt=""
          />
          <div className="mt-16 group-hover:mt-10 flex justify-center">
            <button className="text-sm uppercase font-semibold text-lime-700 px-3 py-2 rounded-full bg-lime-400 shadow">
              Shop Now
            </button>
          </div>
        </div>
        <div className="h-72 p-5 bg-green-300 flex-grow duration-300 hover:flex-grow-[5] bg-[url(/assets/images/intro-bg-2.png)] bg-no-repeat bg-cover group overflow-hidden">
          <img
            className="w-72 h-52 group-hover:w-52 group-hover:h-40 mx-auto duration-300"
            src="/assets/images/intro-item-2.png"
            alt=""
          />
          <div className="mt-16 group-hover:mt-10 flex justify-center">
            <button className="text-sm uppercase font-semibold text-lime-700 px-3 py-2 rounded-full bg-lime-400 shadow">
              Shop Now
            </button>
          </div>
        </div>
        <div className="h-72 p-5 bg-blue-300 flex-grow duration-300 hover:flex-grow-[5] bg-[url(/assets/images/intro-bg-3.png)] bg-no-repeat bg-cover group overflow-hidden">
          <img
            className="w-72 h-52 group-hover:w-52 group-hover:h-40 mx-auto duration-300"
            src="/assets/images/intro-item-3.png"
            alt=""
          />
          <div className="mt-16 group-hover:mt-10 flex justify-center">
            <button className="text-sm uppercase font-semibold text-lime-700 px-3 py-2 rounded-full bg-lime-400 shadow">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <BestSeller></BestSeller>
    </div>
  );
};

export default home;
