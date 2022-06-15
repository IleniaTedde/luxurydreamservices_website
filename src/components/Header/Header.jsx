import styles from "./Header.module.scss";
import React, { useEffect, useState, useCallback, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import logo from './../../assets/icons/lds_logo_oro.svg';
const Header = ({ data, language, selector}) => {
    const localLanguage = 'en';
    const [slug, setSlug] = useState(null);

    const setSlugFn = (slug) => {
      setSlug(slug);
      console.log(slug);
    }
    const scroll = ()  => {
     window.scrollTo({
        top: selector.current.offsetTop,
        behavior: 'smooth'
     })
    };
    
    return (
        <>
            <header className={styles.Header}>
            <div className={styles.containerSx}>
               <a href={`/${localLanguage}/`}>
                  <img key={"logo header"} className={styles.logo} src={logo} alt="logo" />
                  </a> 
               </div>
       
              <div className={styles.containerDx}>
                 {data && data.link && data.link.map((el, i) => {
                    if (i === 0) {
                        return
                    }
                    else {
                        return (
                            <Link key={"headerLink " + i} 
                            className={`${styles.link} ${slug === (el.url) ?  styles.linkSelected : ''}`} 
                            to={el && '/' + localLanguage + el.url}>
                                <span onClick={() => setSlugFn(el.url)}>{el && el.slug}
                                 </span>
                             </Link>
                        )
                    }
                 })}
                  <button onClick={() => scroll()}><span className={styles.labelForm}>{data.labelForm}</span></button>
                
                 {language && language.map((el, i) => {
                    return <div key={'language ' + i} className={`${styles.language} ${el.slug  === localLanguage ? styles.languageSelected : ''}`}>{el.slug}</div>
                   })}
                </div>

            </header>
        </>
    );
};

export default Header;