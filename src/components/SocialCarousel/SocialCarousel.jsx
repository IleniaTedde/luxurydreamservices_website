import styles from "./SocialCarousel.module.scss";
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
import Social from "../Social/Social";

SwiperCore.use([Navigation, FreeMode, Pagination,EffectFade, Autoplay]);



const SocialCarousel = ({api, labels, social, layout}) => {
    const [mainSwiper, setMainSwiper] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

   const nextSlide = () => {
    mainSwiper.slideNext();
  };

  const prevSlide = () => {
    mainSwiper.slidePrev();
  };

  const delayAutoplay = 10000;
  console.log(api)
    return (
        <div className={`${styles.SocialCarousel} `}>
     <div className={`${styles.carouselContainer}  ${ " socialCarousel"}`}>
              {api.slide && api.slide.length > 0 && (
                 <Swiper className={`${styles.swiper} socialSwiper`}
                 draggable={true}
                 //effect={"fade"}
                 onSwiper={setMainSwiper}
                 speed={2000}
                 autoplay={{delay: delayAutoplay}}
                 slidesPerView={'auto'}
                 centeredSlides
                 spaceBetween={0}
                 centeredSlidesBounds
                 modules={[Pagination, FreeMode, EffectFade]}
                 slideToClickedSlide={true}
                 loop
                 >
             
                {api.slide.map((d,i) => (
                 <SwiperSlide key={'socialSlide-' + i}> 
                {d.image && d.image.url && 
                  <img src={d.image.url}  alt={d.image.alt}/>  } 
                 </SwiperSlide>
       
                ))} 
                 </Swiper>
            )}  
         <div className={styles.followUs}>
            <div className={styles.followContainer}>
                <div className={styles.label}>{labels.labelFollowUs}</div>
                <div className={styles.social}>
                  <Social social={layout.social} />
                   </div>
                </div>
                </div>
      </div>
          </div>

    );
};

export default SocialCarousel;