import styles from "./Footer.module.scss";
import React, { useEffect, useState, useCallback, useRef, useContext } from "react";
import Social from "../Social/Social";
import logoHome from './../../assets/icons/lds_logo_oro.svg';

const checkSvg = <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="red">
<path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
</svg>

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

  const [name,setName] = useState('');
  const [surname,setSurname] = useState('');
  const [mail,setMail] = useState('');

  const [nameMandatory,setNameMandatory] = useState(false);
  const [surnameMandatory,setSurnameMandatory] = useState(false);
  const [mailMandatory,setMailMandatory] = useState(false);

  const [number,setNumber] = useState('');
  const [message,setMessage] = useState('');

  const [send,setSend] = useState(false);
  const [check,setCheck] = useState(false);
  

  useEffect(() => {
     if((name === '') || (surname === '') || (mail === '') || (!check)) {
      setSend(false);
     }
     else {
      setSend(true);
     }
  }, [name, surname, mail, check]);

   const sendFn = () => {
      if(name === '') {
        setNameMandatory(true);
      }
      else {
        setNameMandatory(false);
      }
      if(surname === '') {
        setSurnameMandatory(true);
      }
      else {
        setSurnameMandatory(false);
      }
      if(mail === '') {
        setMailMandatory(true);
      }
      else {
        setMailMandatory(false);
      }
   }

  return (
    <>
      <footer ref={topFooter} className={styles.Footer}>
        <div className={`${styles.formContainer} centeredSection`}>
          {data.form && data.form.title && <div className={styles.title} dangerouslySetInnerHTML={{ __html: data.form.title }}>
          </div>}
          {data.form && data.form.subtitle && <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: data.form.subtitle }}>
          </div>}

          <div className={styles.form}>
            <div className="col-2">
              <div className={styles.field}>
                <li>
                {(data.form.field.name.mandatory = true) && <span className={nameMandatory ? styles.red : ''}>{'*'}</span>}
                {data.form.field.name.label}</li>
                <input type="text"
                  //autoFocus
                  placeholder={''}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  ></input>
              </div>
              <div className={styles.field}>
                <li>
                {data.form.field.surname.mandatory && <span className={surnameMandatory ? styles.red : ''}>{'*'}</span>}
                {data.form.field.surname.label}</li>
                <input type="text"
                  placeholder={''}
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  ></input>
              </div>
            </div>

            <div className="col-2">
            <div className={styles.field}>
                <li>
                 {data.form.field.mail.mandatory && <span className={mailMandatory ? styles.red : ''}>{'*'}</span>}{data.form.field.mail.label}</li>
                <input type="text"
                  placeholder={''}
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  ></input>
              </div>
              <div className={styles.field}>
                <li>
                {data.form.field.number.mandatory && <span>{'*'}</span>}{data.form.field.number.label}</li>
                <input type="text"
                  placeholder={''}
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  ></input>
              </div>
            </div>
            <div className="col-1">
            <div className={styles.field}>
            <li>{data.form.field.message.label}</li>
            <textarea type="text"
                  placeholder={''}
                  value={message}
                  className={styles.inputMessage}
                  onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
              </div>
            </div>
            <div className="col-2">
              <label className={`${styles.conditions} conditions`}>
              <input type="checkbox" 
                     onChange={(e) => setCheck(!check)}
                  />
              <span className={`${styles.checkmark} `}>
                {check ? checkSvg : ''}
              </span>
             <span className={styles.label}>{labels.conditions}</span>
              </label>
            <button onClick={() => sendFn()} className={`${styles.send} ${send ? styles.allowed : ''}`}>
             {send && <a href={`mailto:${data.form.sendMail} ?subject=${data.form.subject}&cc=${data.form.cc}&body=${data.form.field.name.label}%3A%20${name}%0D%0A${data.form.field.surname.label}%3A%20${surname}%0D%0A${data.form.field.number.label}%3A%20${number}%0D%0A${data.form.field.mail.label}%3A%20${mail}%0D%0A%0D%0A--------%0D%0A${data.form.field.message.label}%3A%20%0D%0D${message}0A%0D%0A`}>{labels.send}</a>}
             {!send && labels.send }
              </button>
            </div>
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