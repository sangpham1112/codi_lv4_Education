import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousel = ({ data, children, ...props }) => {
  return (
    <Swiper {...props}>
      {data?.map((item, index) => (
        <SwiperSlide key={index}>{children(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
