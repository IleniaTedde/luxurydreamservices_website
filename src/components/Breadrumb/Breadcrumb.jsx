import styles from "./Breadcrumb.module.scss";
import React, { useEffect, useState, useCallback, useRef, useContext } from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({breadcrumb}) => {
    return (
        <div className={`${styles.Breadcrumb}  `}>
          <nav aria-label="breadcrumbs">
            <ol>
              {breadcrumb && breadcrumb.paths && breadcrumb.paths.length > 0 && 
              breadcrumb.paths.map((p,i) => (
                <li key={p.label}>
                <Link key={`breadcrumb-${p}`} to={p.path}>
                <a
                  aria-label={p.label.replace("&amp;", "&")}
                  title={p.label.replace("&amp;", "&")}
                  aria-current={i == breadcrumb.paths.length - 1 ? "page" : null}
                  dangerouslySetInnerHTML={{ __html: p.label }}>
                </a>
                </Link>
                {breadcrumb.paths.indexOf(p) !== breadcrumb.paths.length - 1 ? (
                <span aria-hidden={true} className={styles.icon}>
                     <svg width="10" height="15" viewBox="0 0 10 6">
                       <path
                         d="M1.68006 5L5.34003 1L9 5"
                         strokeWidth="1"
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         fill="none"
                       />
                     </svg>
                   </span>
                      ) : null}
                   </li>
              ))}

            </ol>
            </nav>
          </div>

    );
};

export default Breadcrumb;