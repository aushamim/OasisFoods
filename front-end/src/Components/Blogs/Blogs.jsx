import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";

import Blog from "./Blog";

const Blogs = () => {
  return (
    <div className="mt-16">
      <div>
        <h1 className="text-5xl font-bold text-center">From The Blog</h1>
        <span className="w-20 h-1 bg-orange-300 block mx-auto mt-2"></span>
      </div>

      <div>
        <Swiper
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={35}
          className="mySwiper rounded-lg mt-10 grid grid-cols-3 gap-5"
        >
          <SwiperSlide>
            <Blog></Blog>
          </SwiperSlide>

          <SwiperSlide>
            <Blog></Blog>
          </SwiperSlide>
          <SwiperSlide>
            <Blog></Blog>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center justify-center py-52">
              <a
                href=""
                className="font-semibold text-lg hover:text-orange-500 duration-300"
              >
                See More ...
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
