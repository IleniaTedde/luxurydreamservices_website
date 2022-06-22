
import './App.scss';
import LuxuryLayout from './layouts/LuxuryLayout/LuxuryLayout';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import ReactCreateElement from './components/ReactCreateElement/ReactCreateElement';
import Home from './pages/Home';
import Services from './pages/Services';
import ApplicationContext from './layouts/Context/ApplicationContextProvider';
import { faUniregistry } from '@fortawesome/free-brands-svg-icons';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';



function App() {
  //const baseUrl = `${process.env.LDS_BASEURL}`;

  let langStorage =  localStorage.getItem('lang');

  const baseUrl = langStorage === 'en' ? 'http://localhost:8000' : 'http://localhost:8001';
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
        setLocale(langStorage);
      }
      })
  }, [baseUrl])

  //  useEffect(() => {
  //  // window.location.reload();
  //  console.log('locale');
  // console.log(locale);
  // console.log(window.location.pathname);
  //   if(window.location.pathname.includes('/it/')) {
  //     console.log('a')
  //     if(locale === 'en') {
  //       console.log('b')
  //       window.location.pathname.replace('/it/','/en/');
  //     }
  //   }
  //   if(window.location.pathname.includes('/en/')) {
  //     console.log('c')
  //     if(locale === 'it') {
  //       console.log('d')
  //       window.location.pathname.replace('/en/','/it/');
  //     }
  //   }
  //  },[locale]);
   
   if((window.location.pathname === '/' ) && locale) {
    window.location.replace(`http://localhost:3000/${locale}`);
  }

  return (
    <>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap" rel="stylesheet" />


   {locale && 
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
    }
    </>
  );
}

export default App;
