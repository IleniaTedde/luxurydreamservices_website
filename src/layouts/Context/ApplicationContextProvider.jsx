import React, { createContext, useEffect, useState } from 'react';

const ApplicationContext = React.createContext(0)

export const ApplicationContextProvider = ({ children }) => {

    const [prova, setProva] = useState()

    const setProvaFn = (n) => {
        if (n>5) {
            setProvaFn(n);
        }
    }

    return (
        <ApplicationContext.Provider value={{prova, setProva, setProvaFn}}>
            {children}
        </ApplicationContext.Provider>
    );
}

export default ApplicationContext;