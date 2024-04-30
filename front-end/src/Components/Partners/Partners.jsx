import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";

const Partners = () => {
  return (
    <div className="bg-gray-100 p-5 mt-16 rounded-lg">
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        slidesPerView={10}
        spaceBetween={0}
        className="mySwiper rounded-lg"
      >
        <SwiperSlide>
          <div>
            <img
              className="h-12 mx-auto"
              src="/assets/images/partners-1.png"
              alt="partners"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-12 mx-auto"
              src="/assets/images/partners-2.png"
              alt="partners"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-12 mx-auto"
              src="/assets/images/partners-3.png"
              alt="partners"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img
              className="h-12 mx-auto"
              src="/assets/images/partners-1.png"
              alt="partners"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-12 mx-auto"
              src="/assets/images/partners-2.png"
              alt="partners"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-12 mx-auto"
              src="/assets/images/partners-3.png"
              alt="partners"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img
              className="h-12 mx-auto"
              src="/assets/images/partners-1.png"
              alt="partners"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-12 mx-auto"
              src="/assets/images/partners-2.png"
              alt="partners"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-12 mx-auto"
              src="/assets/images/partners-3.png"
              alt="partners"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img
              className="h-12 mx-auto"
              src="/assets/images/partners-1.png"
              alt="partners"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-12 mx-auto"
              src="/assets/images/partners-2.png"
              alt="partners"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="h-12 mx-auto"
              src="/assets/images/partners-3.png"
              alt="partners"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partners;
