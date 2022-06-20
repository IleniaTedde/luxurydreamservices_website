import styles from "./Footer.module.scss";
import React, { useEffect, useState, useCallback, useRef, useContext } from "react";
import Social from "../Social/Social";
import logoHome from './../../assets/icons/lds_logo_oro.svg';

const Footer = ({ link, data, locale, labels, social, slugPage }) => {

  const topFooter = useRef(null);

  const scroll = () => {
    window.scrollTo({
      top: topFooter.current.offsetTop - 200,
      behavior: 'smooth'
    })
  };

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
      <footer ref={topFooter} className={styles.Footer}>
        <div className={`${styles.formContainer} centeredSection`}>
          {data.form && data.form.title && <div className={styles.title} dangerouslySetInnerHTML={{ __html: data.form.title }}>
          </div>}
          {data.form && data.form.subtitle && <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: data.form.subtitle }}>
          </div>}

          <div className={styles.form}>
            <li>{data.form.field.name}</li>
            <li>{data.form.field.surname}</li>
            <li>{data.form.field.mail}</li>
            <li>{data.form.field.number}</li>
            <li>{data.form.field.message}</li>
            <button>{labels.send}</button>
            <li>{labels.conditions}</li>
          </div>
        </div>
        <hr className={styles.linesMobile + " lines"}></hr>
        <div className={`${styles.interContainerMobile} centeredSection `}>
          <div className={styles.logo}
            key={`logo-footer`} >
            <a href={`/${locale}/`}>
              {<img key={"logo header home"} className={styles.logoImg} src={logoHome} alt="logo home" />}
            </a>  </div>
          <div className={`${styles.infoMobile} `}>
            {data.name && <li dangerouslySetInnerHTML={{ __html: data.name }}></li>}
            {data.address && <li dangerouslySetInnerHTML={{ __html: data.address }}></li>}
            {data.number && <li>{labels && labels.labelTel && labels.labelTel}{labels && labels.labelTel && ': '}{data.number}</li>}
          </div>
        </div>
        <hr className="lines"></hr>
        <div className={`${styles.footer} centeredSection`}>
          <div className={styles.container2columns}>
            <div className={styles.interContainer}>
              <div className={styles.logo}
                key={`logo-footer`} >
                <a href={`/${locale}/`}>
                  {<img key={"logo header home"} className={styles.logoImg} src={logoHome} alt="logo home" />}
                </a>  </div>
              <div className={styles.info}>
                {data.name && <li dangerouslySetInnerHTML={{ __html: data.name }}></li>}
                {data.address && <li dangerouslySetInnerHTML={{ __html: data.address }}></li>}
                {data.number && <li>{labels && labels.labelTel && labels.labelTel}{labels && labels.labelTel && ': '}{data.number}</li>}
              </div>
            </div>
            <div className={styles.link}>
              {link && link.length > 0 && link.map((d, i) => {
                if (i === 0) {
                  return
                }
                else
                  return <li
                    key={`link-footer-${i}`} >
                    <a href={'/' + locale + d.url} target={"_self"} title={d.slug} dangerouslySetInnerHTML={{ __html: d.slug }}>
                    </a>
                  </li>
              })}
              {labels && labels.labelForm && <button onClick={() => scroll()}><span className={styles.labelForm} dangerouslySetInnerHTML={{ __html: labels.labelForm }}></span></button>}
            </div>
          </div>
          <div className={styles.social}>
            <Social social={social} />
          </div>
        </div>

        <hr className="lines"></hr>
        <div className={`${styles.lowFooter} centeredSection`}>
          <nav>
            <p>
              <i>{new Date().getFullYear()}©Luxury Dream Services SA</i>
            </p>
            <ul className={`nav-menu ${styles.colophonMenu}`}>
              {data && data.lowFooter &&
                data.lowFooter.length > 0 &&
                data.lowFooter.map((d, index) => (
                  <li
                    className={styles.copyItem}
                    key={`colophon-menu-${index}`}>
                    <a href={'/' + locale + d.url} target={"_self"} title={d.slug} dangerouslySetInnerHTML={{ __html: d.slug }}>
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