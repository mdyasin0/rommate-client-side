import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import "swiper/swiper-bundle.css";

const Home = () => {
  return (
    <div className="bg-gradient-to-t from-indigo-300 via-purple-300 to-pink-200">
      {/* slider */}
      <section className="pt-20 pb-20">
        {/* Slider with Autoplay */}
        <Swiper
          className="   "
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectFade,
            Autoplay,
          ]}
          spaceBetween={50}
          effect="fade"
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <img
              className="w-11/12 h-[600px] mx-auto rounded-2xl "
              src="https://i.ibb.co/C3g5NfLq/download-1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-11/12 h-[600px] mx-auto rounded-2xl "
              src="https://i.ibb.co/LDjpSCg3/download-2.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-11/12h-[600px]  mx-auto rounded-2xl "
              src="https://i.ibb.co/3mVNrhvJ/images-7.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-11/12 h-[600px] mx-auto rounded-2xl "
              src="https://i.ibb.co/1JX9C54p/images-12.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-11/12 h-[600px] mx-auto rounded-2xl "
              src="https://i.ibb.co/LhBxsS8f/download.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-11/12 h-[600px] mx-auto rounded-2xl "
              src="https://i.ibb.co/Xk8XYF0H/images-10.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Home;
