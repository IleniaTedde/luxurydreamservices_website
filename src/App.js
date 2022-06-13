
import './App.scss';
import Services from './pages/Services';
import Home from './pages/Home';
import LuxuryLayout from './layouts/LuxuryLayout/LuxuryLayout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  //const baseUrl = `${process.env.LDS_BASEURL}`;
const baseUrl = 'http://localhost:8000';

  return (
    <Router>
       <LuxuryLayout baseUrl={baseUrl}> 
          <Switch>
            <Route exact path="/">
            <Home baseUrl={baseUrl} slug={"home"}/>
            </Route>
            <Route exact path="/services">
              <Services baseUrl={baseUrl} slug={"services"}/>
            </Route>
          </Switch>
       </LuxuryLayout> 
    </Router>
  );
}

export default App;
