
import './App.scss';
import LuxuryLayout from './layouts/LuxuryLayout/LuxuryLayout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import ReactCreateElement from './components/ReactCreateElement/ReactCreateElement';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  //const baseUrl = `${process.env.LDS_BASEURL}`;
  const baseUrl = 'http://localhost:8000';
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${baseUrl}/layout`)
      .then(res => {
        return res.json();
      })
      .then(data => {
       { data && data.header && data.header.link &&
        setData(data.header.link);}
      })
  }, [])
  return (
    <Router>
      <LuxuryLayout baseUrl={baseUrl}>
        <Switch>
           {data && data.map((el,i) => {
            return (
                <Route key={"route " + el.url} exact path={el.url}>
                     <ReactCreateElement baseUrl={baseUrl} slug={el.slug}/>  
                   </Route>
            )        
               })}  
        </Switch>
      </LuxuryLayout>
    </Router>
  );
}

export default App;
