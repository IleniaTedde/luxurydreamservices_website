import styles from "./Footer.module.scss";
import React, { useEffect, useState, useCallback, useRef, useContext } from "react";

const Footer = ({data}) => {
    return (
        <>
        <footer className={styles.Footer}>{data}</footer>
        </>

    );
};

export default Footer;