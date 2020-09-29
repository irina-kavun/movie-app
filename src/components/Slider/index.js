import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { sliderImages } from "../../constants/sliderOptions";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "./styles.scss";

SwiperCore.use([Navigation, EffectFade]);

const Slider = () => {
  const slides = sliderImages.map((image) => (
    <SwiperSlide key={image}>
      <Link to="/">
        <img className="slider-image" src={image} alt={image} />
      </Link>
    </SwiperSlide>
  ));
  return (
    <Swiper
      effect="fade"
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      loop={true}
      speed={1000}
    >
      <div className="swiper-button-next">
        <span className="swiper-button-label">Next</span>
      </div>
      <div className="swiper-button-prev">
        <span className="swiper-button-label">Prev</span>
      </div>
      {slides}
    </Swiper>
  );
};

export default Slider;
