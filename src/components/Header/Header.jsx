import styles from "./Header.module.scss";
import React, { useEffect, useState, useCallback, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import logo from './../../assets/icons/lds_logo_oro.svg';
import MenuMobile from "../MenuMobile/MenuMobile";

const Header = ({ data, language, selector, locale, labels }) => {
    const [slug, setSlug] = useState(null);
    const [ openBurgerMenu, setOpenBurgerMenu] = useState(false);
    const [ headerFixed, setHeaderFixed] = useState(true);

    const setSlugFn = (slug) => {
        setSlug(slug);
        console.log(slug);
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
        if((st > lastScrollTop) && (topContent < -200)) {
            setHeaderFixed(false)
          }
          else {
            setHeaderFixed(true)
          }
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
                                    className={`${styles.link} ${slug === (el.url) ? styles.linkSelected : ''}`}
                                    to={el && '/' + locale + el.url}>
                                    <span onClick={() => setSlugFn(el.url)}>{el && el.slug}
                                    </span>
                                </Link>
                            )
                        }
                    })}
                    <button onClick={() => scroll()}><span className={styles.labelForm}>{labels.labelForm}</span></button>

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