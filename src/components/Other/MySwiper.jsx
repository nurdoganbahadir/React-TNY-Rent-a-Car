import React from "react";
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import logo from "../../assets/images/error.png";

const MySwiper = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    
      <div className="h-[40vh] mb-16">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img src={logo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={logo} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    
  );
};

export default MySwiper;
