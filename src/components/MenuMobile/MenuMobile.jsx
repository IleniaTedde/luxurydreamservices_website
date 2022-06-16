import styles from "./MenuMobile.module.scss";
import React, { useEffect, useState, useCallback, useRef, useContext } from "react";
import { Link } from "react-router-dom";

const MenuMobile = ({isOpen, navs, onClickMenuItem, locale, labels, selector }) => {

    const scroll = () => {
        onClickMenuItem();
        window.scrollTo({
            top: selector.current.offsetTop,
            behavior: 'smooth'
        })
    };
    return (
        <>
        <div className={`${ styles.MenuMobile} ${isOpen ? styles.open : ''}`}>
          <div  className={`${styles.menuMobileContainer }`}>
           {navs &&
          navs.length > 0 &&
          navs.map((d, i) => {
            if(i===0) {
                return
            }
            else {
               return <div className={styles.menuMobileItem} key={d.id}>
                <Link key={`menumobile-${d.id}`} to={`${'/' + locale + d.url}`} title={d.slug} aria-label={d.slug}>
                  <span onClick={onClickMenuItem} >
                    {d.slug}
                  </span>
                </Link>
            </div>
            }
        
           }
          )} 
           <button onClick={() => scroll()}><span className={styles.labelForm}>{labels.labelForm}</span></button> 
          </div>
        </div>
        </>

    );
};

export default MenuMobile;

