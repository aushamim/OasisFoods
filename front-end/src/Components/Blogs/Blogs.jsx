import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper/modules";

import Blog from "./Blog";
import useGlobalState from "../../Hooks/useGlobalState";
import { useEffect, useState } from "react";

const Blogs = () => {
  const { blogs } = useGlobalState();

  const [filteredBlogs, setFilteredBlogs] = useState([]);
  useEffect(() => {
    if (blogs.length < 4) {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.slice(0, 3));
    }
  }, [blogs]);

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
          {filteredBlogs?.map((blog) => (
            <SwiperSlide key={blog.id}>
              <Blog id={blog.id}></Blog>
            </SwiperSlide>
          ))}

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
