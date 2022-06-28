import styles from "./ServicesCarouselHome.module.scss";
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



const ServicesCarouselHome = ({api, labels, layout}) => {
    const [mainSwiper, setMainSwiper] = useState(0);
    const [textSwiper, setTextSwiper] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndexText, setCurrentIndexText] = useState(0);
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
    else if(currentIndexText) {
      mainSwiper.slideTo(currentIndexText);
    }
  }, [currentIndex, currentIndexText])

    return (
        <div className={`${styles.ServicesCarouselHome} `}>
           {api.pretitle && <div className={styles.pretitle} dangerouslySetInnerHTML={{__html: api.pretitle}} />}
            { layout.link && layout.link.length > 0 && layout.link.map((e,i) => {
                   if(e.slug === api.slugService) {
                   return <div className={styles.servicesContainer}   key={e.slug} >
                    {e.items && e.items.length > 0 && e.items.map((el, index) => {
                        return <div className={`${styles.servicesLabel} ${index === 0 ? styles.isSelected : ''}`}><a key={'services label home' + el.slug} href={'/' + layout.locale + el.url} dangerouslySetInnerHTML={{__html: el.slug}} /></div>
                    })} 
                   </div> 
                   }
             })
             } 
            <div className={`${styles.carouselContainer} ${"servicesHomeCarousel"}`}>
                CAROUSEL 
            </div>
           {api.cta && api.cta.url && api.cta.label && <div className={styles.cta}>
             <a href={api.cta.url}  dangerouslySetInnerHTML={{__html: api.cta.label}} /></div>}

          </div>

    );
};

export default ServicesCarouselHome;