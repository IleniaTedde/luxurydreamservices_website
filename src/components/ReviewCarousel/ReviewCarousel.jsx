import styles from "./ReviewCarousel.module.scss";
import React, { useEffect, useState, useCallback, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import SwiperCore, { FreeMode, Navigation, Pagination, EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, FreeMode, Pagination,EffectFade, Autoplay]);

const arrow = <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" width="6" height="58" viewBox="0 0 6 58" fill="none">
<path d="M3 58L5.88675 53L0.113246 53L3 58ZM2.5 -2.18557e-08L2.5 53.5L3.5 53.5L3.5 2.18557e-08L2.5 -2.18557e-08Z" fill="#84754E" /></svg>;

const circle = <svg className={styles.circle} xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
<circle cx="28" cy="28" r="27.5" stroke="#84754E" /></svg>;

const ReviewCarousel = ({api}) => {
    const [mainSwiper, setMainSwiper] = useState(0);
   const delayAutoplay = 10000;
    return (
        <div className={`${styles.ReviewCarousel} `}>
           <div className={`${styles.carouselContainer}  ${ "largeCenteredSection  reviewCarousel"}`}>
              {api.slide && api.slide.length > 0 && (
                <Swiper className={styles.swiper} data-text={'ciao'}
                draggable={true}
                //effect={"fade"}
                onSwiper={setMainSwiper}
                speed={2000}
                autoplay={{delay: delayAutoplay}}
                slidesPerView={1}
                centeredSlides
                centeredSlidesBounds
                modules={[Pagination, FreeMode, EffectFade]}
                slideToClickedSlide={true}
                pagination={{ clickable: true, dynamicBullets: false }}
                navigation
                loop
                >
               {api.slide.map((d,i) => (
                <SwiperSlide key={'heroHomeSlide-' + i}>
                <img src={d.image.url}></img>
                </SwiperSlide>
               ))}
                </Swiper>
            )}  
            </div>
          </div>

    );
};

export default ReviewCarousel;