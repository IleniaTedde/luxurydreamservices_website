import styles from "./ReactCreateElement.module.scss";
import React, { useEffect, useState, useCallback, useRef, useContext } from "react";
import { Link } from "react-router-dom";

import Home from "../../pages/Home";
import Services from "../../pages/Services";
import ServicesSingle from "../../pages/ServicesSingle";
import About from "../../pages/About";

const Components = {
    "home": Home,

    "how-we-work": About,
    "chi-siamo": About,

    "services": Services,
    "servizi": Services,

    "holiday": ServicesSingle,
    "holiday-ita": ServicesSingle,
    "relocation": ServicesSingle,
    "relocation-ita": ServicesSingle,
    "business-trip": ServicesSingle,
    "business-trip-ita": ServicesSingle,
    "locals": ServicesSingle,
    "locals-ita": ServicesSingle,


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