import s from "./HomePage.module.css"

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper/modules"

import "swiper/css";


export const HomePage = () => {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={30}
      centeredSlides={true}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide><img className={s.wid} src="./photos/homepagephoto1.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className={s.wid} src="/photos/scale_1200.png" alt="" /></SwiperSlide>
      <SwiperSlide><img className={s.wid} src="/photos/krasivie-kartinki-peizazh-1.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className={s.wid} src="/photos/mount-fuji-1313x875-1.jpg" alt="" /></SwiperSlide>
    </Swiper>
  )
};

