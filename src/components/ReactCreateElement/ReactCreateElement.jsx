import styles from "./ReactCreateElement.module.scss";
import React, { useEffect, useState, useCallback, useRef, useContext } from "react";
import { Link } from "react-router-dom";

import Home from "../../pages/Home";
import Services from "../../pages/Services";
import ServicesSingle from "../../pages/ServicesSingle";
import About from "../../pages/About";

const Components = {
    "home": Home,
    "services": Services,
    "services-single": ServicesSingle,
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