import styles from "./ReactCreateElement.module.scss";
import React, { useEffect, useState, useCallback, useRef, useContext } from "react";
import { Link } from "react-router-dom";

import Home from "../../pages/Home";
import Services from "../../pages/Services";
import About from "../../pages/About";

const Components = {
    "home": Home,
    "services": Services,
    "services_1": Services,
    "services_2": Services,
    "services_3": Services,
    "services_4": Services,
    "how-we-work": About,
}

const ReactCreteElement = ({baseUrl, slug}) => {
    return ( 
         React.createElement(Components[slug], {
           slug: slug,
           baseUrl: baseUrl,
         })
    );
};

export default ReactCreteElement;