import styles from "./HeroServicesArchive.module.scss";
import React, { useEffect, useState, useCallback, useRef, useContext } from "react";
import { Link } from "react-router-dom";

const iconPlus = (
  <svg width="15" height="25" viewBox="0 0 23 23" fill="none">
    <path
      d="M11.04 1.8369L11.1291 22.0014"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.1629 11.8834L0.998162 11.9638"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HeroServicesArchive = ({api, labels}) => {
    return (
        <div className={`${styles.HeroServicesArchive} `}>
           { (api.up || api.center || api.down) && <div className={`${styles.container } ${"centeredSection"}`}> 
         {api.up &&  <div className={styles.gold} dangerouslySetInnerHTML={{__html: api.up}} /> }
         {api.center && <div className={styles.white} dangerouslySetInnerHTML={{__html: api.center}} /> }
         {api.down &&  <div className={styles.gold} dangerouslySetInnerHTML={{__html: api.down}} /> }
           {labels && labels.labelReadMore && 
           <div className={styles.containerReadMore}>
           <div className={styles.readMore} dangerouslySetInnerHTML={{__html: labels.labelReadMore}} />
           <span className={styles.icon}> {iconPlus}</span>  
             </div> }
            </div>}
          </div>

    );
};

export default HeroServicesArchive;