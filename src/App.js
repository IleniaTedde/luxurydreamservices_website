
import './App.scss';
import LuxuryLayout from './layouts/LuxuryLayout/LuxuryLayout';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import ReactCreateElement from './components/ReactCreateElement/ReactCreateElement';
import Home from './pages/Home';
import Services from './pages/Services';
import ApplicationContext from './layouts/Context/ApplicationContextProvider';



function App() {
  //const baseUrl = `${process.env.LDS_BASEURL}`;
  const baseUrl = 'http://localhost:8000';

  const { languageProva } = useContext(ApplicationContext);


  const [data, setData] = useState(null);
  const [locale, setLocale] = useState(null);
  useEffect(() => {
    fetch(`${baseUrl}/layout`)
      .then(res => {
        return res.json();
      })
      .then(data => {
       { data && data.routes && data.routes.link &&
        setData(data.routes.link);
        setLocale(data.locale);
      }
      })
  }, [])


  if(window.location.pathname === '/') {
    window.location.replace(`http://localhost:3000/${locale}`)
  }
  return (
    <>
    <Router>
     
        <Switch>    
           {data && data.map((el,i) => {
              return (
                <Route key={"route " + el.url} exact path={'/' + locale + el.url}>
                   <LuxuryLayout baseUrl={baseUrl} slug={el.slug}>
                     <ReactCreateElement baseUrl={baseUrl} slug={el.slug}/> 
                     </LuxuryLayout> 
                   </Route>
            )    
               })}   
        </Switch>
    </Router>
    </>
  );
}

export default App;
