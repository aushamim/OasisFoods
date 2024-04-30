import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";
import { useRef } from "react";

const HeroSection = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <div>
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          loop={true}
          modules={[Autoplay]}
          className="mySwiper rounded-lg"
        >
          <SwiperSlide>
            <div className="pt-24 pb-52 px-20 bg-[url(/assets/images/hero-1.png)] bg-no-repeat bg-cover">
              <p className="font-semibold text-orange-500 uppercase">
                Fresh Fruit
              </p>
              <h1 className="text-8xl font-bold my-5 -ml-2">Oranges</h1>
              <h3 className="text-xl mb-16">
                <span className="text-3xl font-semibold text-orange-600">
                  $14.00
                </span>{" "}
                / Package
              </h3>
              <a
                href=""
                className="bg-orange-400 px-5 py-3 rounded-full text-white font-medium uppercase"
              >
                Shop Now
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pt-24 pb-52 px-20 bg-[url(/assets/images/hero-2.png)] bg-no-repeat bg-cover">
              <div className="invisible">
                <p className="font-semibold text-orange-500 uppercase">
                  Fresh Fruit
                </p>
                <h1 className="text-8xl font-bold my-5 -ml-2">Summer Fruits</h1>
                <h3 className="text-xl mb-16">
                  <span className="text-3xl font-semibold text-orange-600">
                    20% Off
                  </span>{" "}
                  / Package
                </h3>
                <a
                  href=""
                  className="bg-orange-400 px-5 py-3 rounded-full text-white font-medium uppercase"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pt-24 pb-52 px-20 bg-[url(/assets/images/hero-3.png)] bg-no-repeat bg-cover">
              <p className="font-semibold text-orange-500 uppercase">
                Fresh Fruit
              </p>
              <h1 className="text-8xl font-bold my-5 -ml-2">Summer Fruits</h1>
              <h3 className="text-xl mb-16">
                <span className="text-3xl font-semibold text-orange-600">
                  20% Off
                </span>{" "}
                / Package
              </h3>
              <a
                href=""
                className="bg-orange-400 px-5 py-3 rounded-full text-white font-medium uppercase"
              >
                Shop Now
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="pt-24 pb-52 px-20 bg-[url(/assets/images/hero-4.png)] bg-no-repeat bg-cover">
              <div className="invisible">
                <p className="font-semibold text-orange-500 uppercase">
                  Fresh Fruit
                </p>
                <h1 className="text-8xl font-bold my-5 -ml-2">Summer Fruits</h1>
                <h3 className="text-xl mb-16">
                  <span className="text-3xl font-semibold text-orange-600">
                    20% Off
                  </span>{" "}
                  / Package
                </h3>
                <a
                  href=""
                  className="bg-orange-400 px-5 py-3 rounded-full text-white font-medium uppercase"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>

          <div
            className="autoplay-progress text-orange-300"
            slot="container-end"
          >
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle
                cx="24"
                cy="24"
                r="20"
                className="stroke-orange-300"
              ></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>

      <div className="mt-5 border border-gray-200 p-5 grid grid-cols-4 rounded">
        <div className="border-r border-gray-200">
          <img
            className="w-8 mx-auto"
            src="/assets/images/benifits-1.png"
            alt="benifits"
          />
          <p className="text-center mt-4 mb-1 font-semibold">FREE SHIPPING</p>
          <p className="text-center">For all order over 99$</p>
        </div>
        <div className="border-r border-gray-200">
          <img
            className="w-8 mx-auto"
            src="/assets/images/benifits-2.png"
            alt="benifits"
          />
          <p className="text-center mt-2 mb-1 font-semibold">
            DELIVERY ON TIME
          </p>
          <p className="text-center">Perfect goods condition</p>
        </div>
        <div className="border-r border-gray-200">
          <img
            className="w-8 mx-auto"
            src="/assets/images/benifits-3.png"
            alt="benifits"
          />
          <p className="text-center mt-4 mb-1 font-semibold">SECURE PAYMENT</p>
          <p className="text-center">100% secure payment</p>
        </div>
        <div>
          <img
            className="w-8 mx-auto"
            src="/assets/images/benifits-4.png"
            alt="benifits"
          />
          <p className="text-center mt-2 mb-1 font-semibold">24/7 SUPPORT</p>
          <p className="text-center">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
