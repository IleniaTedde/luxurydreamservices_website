
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
  console.log(languageProva)

  const language = 'en';
  
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${baseUrl}/layout`)
      .then(res => {
        return res.json();
      })
      .then(data => {
       { data && data.routes && data.routes.link &&
        setData(data.routes.link);}
      })
  }, [])
  return (
    <Router>
      <LuxuryLayout baseUrl={baseUrl}>
        <Switch>    
           {data && data.map((el,i) => {
            if(i===0) {
              <Route exact path={"/"} 
          render={() => {
            return (
             <Redirect to={language} />
            )
          }}
          />
            }
            else {
              return (
                <Route key={"route " + el.url} exact path={'/' + language + el.url}>
                     <ReactCreateElement baseUrl={baseUrl} slug={el.slug}/>  
                   </Route>
            )    
            }
               })}   
        </Switch>
      </LuxuryLayout>
    </Router>
  );
}

export default App;
