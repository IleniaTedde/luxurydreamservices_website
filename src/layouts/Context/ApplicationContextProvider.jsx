import React, { createContext, useEffect, useState } from 'react';

const ApplicationContext = createContext(0)

export const ApplicationContextProvider = ({ children }) => {

    const [languageProva, setLanguage] = useState('en')
    return (
        <ApplicationContext.Provider value={{languageProva, setLanguage }}>
            {children}
        </ApplicationContext.Provider>
    );
}

export default ApplicationContext;