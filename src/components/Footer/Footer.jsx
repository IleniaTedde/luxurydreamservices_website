import styles from "./Footer.module.scss";
import React, { useEffect, useState, useCallback, useRef, useContext } from "react";

const Footer = ({data, locale, slugPage}) => {

    useEffect(() => {
        // animateThis();
         window.addEventListener("scroll", scrollHandler);
         scrollHandler();
  
        }, []);
  

    const scrollHandler = () => {
            [...document.querySelectorAll(".lines")].forEach(element => {
                if (element.getBoundingClientRect().top < window.innerHeight) {
                    element.classList.add("linesAnimated");
                }
            });
       };


    return (
        <>
        <footer className={styles.Footer}>
         <div className={styles.form}>FORM</div>
         <hr className="lines"></hr>
         <div className={styles.footer}>{data.name}</div>
         <hr className="lines"></hr>
         <div className={styles.bottomFooter}>BOTTOM FOOTER</div>
        </footer>
        </>

    );
};

export default Footer;