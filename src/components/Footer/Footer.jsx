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
         <div className={`${styles.form} centeredSection`}>FORM</div>
         <hr className="lines"></hr>
         <div className={`${styles.footer} centeredSection`}>{data.name}</div>
         <hr className="lines"></hr>
         <div className={`${styles.lowFooter} centeredSection`}>
          <nav>
            <p>
              <i>{new Date().getFullYear()}©Luxury Dream Services SA</i>
            </p>
             <ul className={`nav-menu ${styles.colophonMenu}`}>
              {data && data.lowFooter &&
                data.lowFooter.length > 0  &&
                data.lowFooter.map((d, index) => (
                  <li
                    className={styles.copyItem}
                    key={`colophon-menu-${index}`}
                  >
                    <a href={'/' + locale + d.url} target={"_self"} title={d.slug}>
                      {d.slug} 
                    </a>
                  </li>
                ))}
            </ul> 
          </nav>
        </div>

        </footer>
        </>

    );
};

export default Footer;