import styles from "./Header.module.scss";
import React, { useEffect, useState, useCallback, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import logoHome from './../../assets/icons/lds_logo_oro.svg';
import logo from './../../assets/icons/lds_logo_oro2.svg';
import MenuMobile from "../MenuMobile/MenuMobile";

const Header = ({ data, language, selector, locale, labels, slugPage }) => {
    const [slug, setSlug] = useState(null);
    const [ openBurgerMenu, setOpenBurgerMenu] = useState(false);
    const [ headerFixed, setHeaderFixed] = useState(true);

    const setSlugFn = (slug) => {
        setSlug(slug);
    }
    const scroll = () => {
        window.scrollTo({
            top: selector.current.offsetTop,
            behavior: 'smooth'
        })
    };

    var lastScrollTop = 0;
    const scrollHandler = () => {
        var topContent = document.querySelector('#main').getBoundingClientRect().top; 
        var st = window.pageYOffset  || document.documentElement.scrollTop;
        if((st > lastScrollTop) && (topContent < -100)) {
            setHeaderFixed(false)
          }
          else {
            setHeaderFixed(true)
          }
          lastScrollTop = st <= 0 ? 0 : st;
    }

    const useIsomorphicLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

    useIsomorphicLayoutEffect(() => {
      window.addEventListener("scroll", scrollHandler);
      scrollHandler();
      return () => {
        window.removeEventListener("scroll", scrollHandler);
      };
    }, []);
    return (
        <>
             <MenuMobile
             isOpen={openBurgerMenu}
             navs={data.link}
             onClickMenuItem={() => setOpenBurgerMenu(!openBurgerMenu)}
             locale={locale}
             labels={labels}
             selector={selector}
             /> 
            <header className={styles.Header}>
                <div className={`${styles.headerContainer} ${!headerFixed ? 'noHeaderFixed' : ' headerFixed'}`}>
                <div className={styles.containerSx}>
                    <a href={`/${locale}/`}>
                      {slugPage === 'home' ?   
                     <img key={"logo header home"} className={styles.logo} src={logoHome} alt="logo home" /> 
                       :
                        <img key={"logo header"} className={`${styles.logo} ${styles.logoOtherPage}`} src={logo} alt="logo" /> } 
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
                                    className={`${styles.link} ${slug === (el.url) ? styles.linkSelected : ''}`}
                                    to={el && '/' + locale + el.url}>
                                    <span onClick={() => setSlugFn(el.url)}>{el && el.slug}
                                    </span>
                                </Link>
                            )
                        }
                    })}
                  {labels && labels.labelForm &&  <button onClick={() => scroll()}><span className={styles.labelForm}>{labels.labelForm}</span></button> } 

                    {language && language.map((el, i) => {
                        return <div key={'language ' + i} className={`${styles.language} ${el.slug === locale ? styles.languageSelected : ''}`}>{el.slug}</div>
                    })}
                </div>

                <div className={styles.burgerMenu}>
                    <button
                        className={styles.burgerIcons}
                        onClick={() => setOpenBurgerMenu(!openBurgerMenu)}
                         >
                        <span className={openBurgerMenu ? styles.open : null}></span>
                        <span className={openBurgerMenu ? styles.open : null}></span>
                    </button>
                </div>
                </div>
            </header>
        </>
    );
};

export default Header;