import styles from "./Header.module.scss";
import React, { useEffect, useState, useCallback, useRef, useContext } from "react";
import { Link } from "react-router-dom";

const Header = ({data}) => {
    return (
        <>
        <header className={styles.Header}>
            {data && data.link && data.link.map((el, i) => {
                return (
                  <Link key={"headerLink " + i} className={styles.link} to={el && el.url}>{el && el.slug}</Link>
                )
            })}

            </header>
        </>
    );
};

export default Header;