import styles from "./HeroHome.module.scss";
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

const HeroHome = ({api, labels}) => {
    const [mainSwiper, setMainSwiper] = useState(0);
   const delayAutoplay = 2000;
    return (
        <div className={`${styles.HeroHome} `}>
          {api.pretitle &&   <div className={`${styles.pretitleContainer} col-3 centeredSection`}>
                <div className={styles.pretitle} dangerouslySetInnerHTML={{__html: api.pretitle}}></div></div> }
            <div className={`${styles.columnsContainer} col-3 centeredSection`}>
            <div className={styles.sx}>
            {api.title &&   <div className={styles.title} dangerouslySetInnerHTML={{__html: api.title}}></div>}
            {api.textLeft && <div className={`${styles.text} ${styles.desktop} `} dangerouslySetInnerHTML={{__html: api.textLeft.substring(0,122).concat( api.textLeft.length > 122 ? '...' : '')}}></div>}
            <div className={styles.containerSvg}>
              {circle}
               {arrow}
                 </div>
                </div>

           <div className={styles.center + " heroHomeCarousel"}>
            {api.slide && api.slide.length > 0 && (
                <Swiper
                draggable={true}
                effect={"fade"}
                onSwiper={setMainSwiper}
                speed={1000}
                 autoplay={{delay: delayAutoplay}}
                slidesPerView={1}
                centeredSlides
                centeredSlidesBounds
                modules={[Pagination, FreeMode, EffectFade]}
                 slideToClickedSlide={true}
                loop
                >
               {api.slide.map((d,i) => (
                <SwiperSlide key={'heroHomeSlide-' + i}>
            {d.image && d.image.url && <img src={d.image.url} alt={d.image.url} /> }
                </SwiperSlide> 
               ))}
                </Swiper>
            )}
            </div>
            {api.textLeft && <div className={`${styles.text} ${styles.mobile} `} dangerouslySetInnerHTML={{__html: api.textLeft.substring(0,122).concat( api.textLeft.length > 122 ? '...' : '')}}></div>}

            <div className={styles.dx}>
            {api.label &&   <div className={styles.scrittaAnim}>
                <span dangerouslySetInnerHTML={{__html: api.label}}></span> 
               {/* <svg viewBox="0 0 1320 300">
              <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                Your tailored dream 
              </text>
              </svg>  */}
                </div>}
             {api.textRight &&   <div className={`${styles.text} ${styles.textDx} `}><span dangerouslySetInnerHTML={{__html: api.textRight}}></span></div> }
                </div>
            </div>
       

          </div>

    );
};

export default HeroHome;