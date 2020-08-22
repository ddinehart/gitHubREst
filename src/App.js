import React from 'react';
import '././App.css';

import Home from './components/Home';
import Nav from './components/Nav';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GetRepos from './components/GetRepos';

function App() {
  return (
    <Router>
      <div className="nav">
        <Nav />
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/searchForRepos" component={GetRepos}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
