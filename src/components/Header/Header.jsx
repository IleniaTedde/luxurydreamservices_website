import styles from "./Header.module.scss";
import { useMemo } from "react";
import queryString from "query-string";
import React, { useEffect, useState, useCallback, useRef, useContext } from "react";
import { Link, useParams,
    useLocation,
    useHistory,
    useRouteMatch} from "react-router-dom";
import logoHome from './../../assets/icons/lds_logo_oro.svg';
import logo from './../../assets/icons/lds_logo_oro2.svg';
import MenuMobile from "../MenuMobile/MenuMobile";

const Header = ({ data, language, selector, locale, labels, slugPage, social }) => {
    const [slug, setSlug] = useState(null);
    const [ openBurgerMenu, setOpenBurgerMenu] = useState(false);
    const [ headerFixed, setHeaderFixed] = useState(true);
    const router = useRouter();

    // console.log(router)
    // console.log(router.pathname)

    const setSlugFn = (slug) => {
        setSlug(slug);
    }
    const scroll = () => {
        window.scrollTo({
            top: selector.current.offsetTop + 100,
            behavior: 'smooth'
        })
    };
  const [url,setUrl] = useState('');

   //console.log(window.location)
    const setLanguage = (lang) => {
     localStorage.setItem('lang', lang);
     setUrl(`${window.location.origin}/${lang}/`);
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
             key={'menuMobile'}
             isOpen={openBurgerMenu}
              navs={data}
              onClickMenuItem={() => setOpenBurgerMenu(!openBurgerMenu)}
              locale={locale}
              labels={labels}
              language={language}
              selector={selector}
              social={social}
             /> 
            <header key={'header'} className={styles.Header}>
                <div className={`${styles.headerContainer} ${(!headerFixed && !openBurgerMenu)  ? 'noHeaderFixed' : ' headerFixed'}`}>
                <div className={styles.containerSx}>
                    <a href={`/${locale}/`}>
                      {slugPage === 'home' ?   
                     <img key={"logo header home"} className={styles.logo} src={logoHome} alt="logo home" /> 
                       :
                        <img key={"logo header"} className={`${styles.logo} ${styles.logoOtherPage}`} src={logo} alt="logo" /> } 
                    </a>           
                </div>

                <div className={styles.containerDx}>
                     {data && data.map((el, i) => {
                        if (i === 0) {
                            return
                        }
                        else if(el.slug && el.url) {
                            return  <Link key={"headerLink " + i}
                                    className={`${styles.link} ${('/' + slugPage) === (el.url) ? styles.linkSelected : ''}`}
                                    to={'/' + locale + el.url}>
                                    <span onClick={() => setSlugFn(el.url)} dangerouslySetInnerHTML={{ __html: el.slug }}>
                                    </span>
                                </Link> 
                        }
                    })} 
                   {labels && labels.labelForm &&  <button key={'labelForm'} onClick={() => scroll()}><span className={styles.labelForm} dangerouslySetInnerHTML={{ __html: labels.labelForm }}></span></button> } 

                  {language && language.map((el, i) => {
                    if(el.slug) {
                        return <button 
                        key={'language ' + i} 
                        className={`${styles.language} ${el.slug === locale ? styles.languageSelected : ''}`}
                        onClick={() => setLanguage(el.slug)}
                       >
                            <a href={url}> 
                                {el.slug}
                                 </a>  
                            </button>
                         }
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

// Hook
export function useRouter() {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  // Return our custom router object
  // Memoize so that a new object is only returned if something changes
  return useMemo(() => {
    return {
      // For convenience add push(), replace(), pathname at top level
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      // Merge params and parsed query string into single "query" object
      // so that they can be used interchangeably.
      // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params,
      },
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      match,
      location,
      history,
    };
  }, [params, match, location, history]);
}

export default Header;