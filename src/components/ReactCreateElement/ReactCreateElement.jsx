import styles from "./ReactCreateElement.module.scss";
import React, { useEffect, useState, useCallback, useRef, useContext } from "react";
import { Link } from "react-router-dom";

import Home from "../../pages/Home";
import Services from "../../pages/Services";

const Components = {
    "home": Home,
    "services": Services,
    "services 1": Services,
    "services 2": Services,
    "services 3": Services,
    "services 4": Services,
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