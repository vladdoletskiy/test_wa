import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {
  Main, Users, About, Project,Modal
} from './Pages/index.js';

import Header from "./Components/Firstscreen/Header/Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
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
          <Route path="/Modal">
            <Modal />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
