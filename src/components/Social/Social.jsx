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
    <div className={styles.Social}>
            {social &&  social.length > 0 && social.map((d,i) => {
            return (
                <>
               {d.name === "instagram" && (
                <a key={`social-${d}`}
                   href={d.link.url}
                target={d.link.target}
                aria-label={d.name}>
                  <FontAwesomeIcon icon={socialIconMapper['instagram']} />
                </a>
               )}
                {d.name === "linkedin" && (
                <a key={`social-${d}`}
                   href={d.link.url}
                target={d.link.target}
                aria-label={d.name}>
                  <FontAwesomeIcon icon={socialIconMapper['linkedin']} />
                </a>
               )}
                {d.name === "tiktok" && (
                <a key={`social-${d}`}
                   href={d.link.url}
                target={d.link.target}
                aria-label={d.name}>
                  <FontAwesomeIcon icon={socialIconMapper['tiktok']} />
                </a>
               )}
                {d.name === "twitter" && (
                <a key={`social-${d}`}
                   href={d.link.url}
                target={d.link.target}
                aria-label={d.name}>
                  <FontAwesomeIcon icon={socialIconMapper['twitter']} />
                </a>
               )}
                 {d.name === "facebook" && (
                <a key={`social-${d}`}
                   href={d.link.url}
                target={d.link.target}
                aria-label={d.name}>
                  <FontAwesomeIcon icon={socialIconMapper['facebook']} />
                </a>
               )}
                {d.name === "youtube" && (
                <a key={`social-${d}`}
                   href={d.link.url}
                target={d.link.target}
                aria-label={d.name}>
                  <FontAwesomeIcon icon={socialIconMapper['youtube']} />
                </a>
               )}
                </>
            )
        })}
        </div>
        </>
    );
};

export default Social;