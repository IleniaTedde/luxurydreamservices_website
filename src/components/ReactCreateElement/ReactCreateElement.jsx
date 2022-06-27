import styles from "./ReactCreateElement.module.scss";
import React, { useEffect, useState, useCallback, useRef, useContext } from "react";
import { Link } from "react-router-dom";

import Home from "../../pages/HomePage/Home";
import Services from "../../pages/Services_page/Services";
import ServiceSingle from "../../pages/ServiceSingle_page/ServiceSingle";
import About from "../../pages/About_page/About";

const Components = {
    "home": Home,

    "how-we-work": About,
    "chi-siamo": About,

    "services": Services,
    "servizi": Services,

    "holiday": ServiceSingle,
    "holiday-ita": ServiceSingle,
    "relocation": ServiceSingle,
    "relocation-ita": ServiceSingle,
    "business-trip": ServiceSingle,
    "business-trip-ita": ServiceSingle,
    "locals": ServiceSingle,
    "locals-ita": ServiceSingle,


}

const ReactCreteElement = ({baseUrl, slug, labels}) => {
    return ( 
         React.createElement(Components[slug], {
           slug: slug,
           baseUrl: baseUrl,
           labels: labels,
         })
    );
};

export default ReactCreteElement;