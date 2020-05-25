import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {
  Main, Users, About, Project,
} from './Pages/index.js';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/Users">
            <Users />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Project">
            <Project />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
