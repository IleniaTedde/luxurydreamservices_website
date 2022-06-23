import styles from "./Social.module.scss";
import React, { useEffect, useState, useCallback, useRef, useContext } from "react";
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faTwitter,
    faYoutube,
    faTiktok
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

  const socialIconMapper = {
    facebook: faFacebookF,
    twitter: faTwitter,
    instagram: faInstagram,
    youtube: faYoutube,
    linkedin: faLinkedinIn,
    tiktok: faTiktok,
  };

const Social = ({social}) => {
    return (
        <>
    <div  className={styles.Social}>
            {social &&  social.length > 0 && social.map((d,i) => {
            return (
                <div key={'social container ' + i}>
               {d.link && d.link.url && d.name && d.name === "instagram" && (
                <a key={`social-${d.name}`}
                   href={d.link.url}
                   target={d.link.target ? d.link.target : ''}
                   aria-label={d.name}>
                  <FontAwesomeIcon icon={socialIconMapper['instagram']} />
                </a>
               )}
                {d.link && d.link.url && d.name && d.name === "linkedin" && (
                <a key={`social-${d.name}`}
                   href={d.link.url}
                   target={d.link.target ? d.link.target : ''}
                   aria-label={d.name}>
                  <FontAwesomeIcon icon={socialIconMapper['linkedin']} />
                </a>
               )}
                {d.link && d.link.url && d.name && d.name === "tiktok" && (
                <a key={`social-${d.name}`}
                   href={d.link.url}
                   target={d.link.target ? d.link.target : ''}
                   aria-label={d.name}>
                  <FontAwesomeIcon icon={socialIconMapper['tiktok']} />
                </a>
               )}
                {d.link && d.link.url && d.name && d.name === "twitter" && (
                <a key={`social-${d.name}`}
                   href={d.link.url}
                   target={d.link.target ? d.link.target : ''}
                   aria-label={d.name}>
                  <FontAwesomeIcon icon={socialIconMapper['twitter']} />
                </a>
               )}
                 {d.link && d.link.url && d.name && d.name === "facebook" && (
                <a key={`social-${d.name}`}
                   href={d.link.url}
                   target={d.link.target ? d.link.target : ''}
                   aria-label={d.name}>
                  <FontAwesomeIcon icon={socialIconMapper['facebook']} />
                </a>
               )}
                {d.link && d.link.url && d.name && d.name === "youtube" && (
                <a key={`social-${d.name}`}
                   href={d.link.url}
                   target={d.link.target ? d.link.target : ''}
                   aria-label={d.name}>
                  <FontAwesomeIcon icon={socialIconMapper['youtube']} />
                </a>
               )}
                </div>
            )
        })}
        </div>
        </>
    );
};

export default Social;