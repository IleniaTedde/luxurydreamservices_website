
import './App.scss';
import Services from './pages/Services';
import Home from './pages/Home';
import LuxuryLayout from './layouts/LuxuryLayout/LuxuryLayout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
       <LuxuryLayout> 
          <Switch>
            <Route exact path="/">
            <Home slug={"home"}/>
            </Route>
            <Route exact path="/services">
              <Services slug={"services"}/>
            </Route>
          </Switch>
       </LuxuryLayout> 
    </Router>
  );
}

export default App;
