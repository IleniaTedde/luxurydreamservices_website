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

import firma from  "../../assets/img/Alison-M.png"
SwiperCore.use([Navigation, FreeMode, Pagination,EffectFade, Autoplay]);

const arrow = <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" width="6" height="58" viewBox="0 0 6 58" fill="none">
<path d="M3 58L5.88675 53L0.113246 53L3 58ZM2.5 -2.18557e-08L2.5 53.5L3.5 53.5L3.5 2.18557e-08L2.5 -2.18557e-08Z" fill="#84754E" /></svg>;

const circle = <svg className={styles.circle} xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
<circle cx="28" cy="28" r="27.5" stroke="#84754E" /></svg>;



const ReviewCarousel = ({api, labels}) => {
    const [mainSwiper, setMainSwiper] = useState(0);
    const [textSwiper, setTextSwiper] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
   const delayAutoplay = 10000;

   const nextSlide = () => {
    mainSwiper.slideNext();
    textSwiper.slideNext();
  };

  const prevSlide = () => {
    mainSwiper.slidePrev();
    textSwiper.slidePrev();
  };

  useEffect(() => {
    if(currentIndex) {
      textSwiper.slideTo(currentIndex);
    }
  }, [currentIndex])

    return (
        <div className={`${styles.ReviewCarousel} `}>
           <div className={`${styles.carouselContainer}  ${ "largeCenteredSection fullMobile reviewCarousel"}`}>
              {api.slide && api.slide.length > 0 && (
                <>
                <Swiper className={`${styles.swiper} reviewCarouselSwiper`}
                draggable={true}
                //effect={"fade"}
                onSwiper={setMainSwiper}
                onActiveIndexChange={(e) => setCurrentIndex(mainSwiper.activeIndex)}
                speed={2000}
             //   autoplay={{delay: delayAutoplay}}
                slidesPerView={1}
                centeredSlides
                centeredSlidesBounds
                modules={[Pagination, FreeMode, EffectFade]}
                slideToClickedSlide={true}
                pagination={{ clickable: true, dynamicBullets: false }}
               // navigation
                loop
                >
               {api.slide.map((d,i) => (
                <SwiperSlide key={'reviewSlide-' + i}>
                  <div className={styles.image}>
                 <img src={d.image.url} /> 
                  </div>
                </SwiperSlide>
               ))}
                </Swiper>

            <Swiper className={`${styles.swiperText} reviewCarouselSwiperText`}
            draggable={true}
            effect={"fade"}
            onSwiper={setTextSwiper}
           // onActiveIndexChange={(e) => setCurrentIndex(e.activeIndex )}
            speed={2000}
          //  autoplay={{delay: delayAutoplay}}
            slidesPerView={1}
            centeredSlides
            centeredSlidesBounds
            modules={[Pagination, FreeMode, EffectFade]}
            slideToClickedSlide={true}
            loop
               >
            {api.slide.map((d,i) => (
            <SwiperSlide key={'reviewSlideText-' + i}>
              <div className={styles.containerText}>
                <div className={styles.text}>{d.text}</div>
                <img className={styles.firma} src={firma}></img>
                <div className={styles.label}>{labels.labelsCeo}</div>
                  </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              </>
            )}  
         <div className={styles.controllers}>
          <button className={`${styles.prev} prevSwiperBtn`} aria-label="previous" onClick={prevSlide}>
           {arrow}
          </button>
          <button className={`${styles.next} nextSwiperBtn`} aria-label="next" onClick={nextSlide}>
           {arrow}
          </button>
        </div> 
            </div>
          </div>

    );
};

export default ReviewCarousel;