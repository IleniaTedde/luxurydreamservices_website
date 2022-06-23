import styles from "./MenuMobile.module.scss";
import React, { useEffect, useState, useCallback, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import Social from "../Social/Social";

const MenuMobile = ({isOpen, navs, onClickMenuItem, locale, labels, selector, language, social }) => {

    const scroll = () => {
        onClickMenuItem();
        window.scrollTo({
            top: selector.current.offsetTop,
            behavior: 'smooth'
        })
    };

    const setLanguage = (lang) => {
      let langStorage =  localStorage.setItem('lang', lang);
      window.location.reload();
       };
    return (
        <>
        <div className={`${ styles.MenuMobile} ${isOpen ? styles.open : ''}`}>
          <div  className={`${styles.menuMobileContainer }`}>
            <div>
           {navs &&
          navs.length > 0 &&
          navs.map((d, i) => {
            if(i===0) {
                return
            }
            else {
               return <div key={'items mobile ' + i}>
             {d.slug && d.url &&   <Link className={styles.menuMobileItem} key={`menumobile-${d.slug}`} to={`${'/' + locale + d.url}`} title={d.slug} aria-label={d.slug}>
                  <span onClick={onClickMenuItem} >
                    {d.slug}
                  </span>
                </Link> }
                 {d.items && d.items.map((sub,i) => {
                  return  <>
                {sub.slug && sub.url &&  <Link className={styles.menuMobileItem} key={`menumobile-${sub.slug}`} to={`${'/' + locale + sub.url}`} title={sub.slug} aria-label={sub.slug}>
                    <span onClick={onClickMenuItem}>
                    {sub.slug}
                    </span>
                    </Link> }
                    </>
                })} 
            </div>
            }
        
           }
          )} 
         { labels && labels.labelForm &&  <button onClick={() => scroll()}><span className={styles.labelForm}>{labels.labelForm}</span></button> }
           </div>
           <div className={styles.flexEnd}>
            <div className={styles.languageContainer}>
           {language && language.map((el, i) => {
                        return <button 
                        key={'languageMobile ' + i} 
                        className={`${styles.language} ${el.slug === locale ? styles.languageSelected : ''}`}
                        onClick={() => setLanguage(el.slug)}>
                        {el.slug}</button>
             })}
             </div>
            <div className={styles.social}>
            <Social social={social} />
            </div>
          </div>
           </div>
          </div>
        </>

    );
};

export default MenuMobile;

