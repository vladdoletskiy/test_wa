import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import {Main, Project, Users, About } from './Components/Pages/index.js';
import './header.css';

const Header = () => {
  return (
    <header className = "firstscreen">
      <div  id="baner"> 
      {/* <Router>  */}
        <div>
        <nav className = "header">
          <a className = "header_link" href="/">Главная</a>
          <a className = "header_link" href="/">Наши проекты</a>
          <a className = "header_link" href="/">Услуги</a>
          <a className = "header_link" href="/">Новости</a>
          <a className = "header_link" href="/">Вход</a>
        </nav>
          {/* <Switch>
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="/Users">
                <Users/>
              </Route>
              <Route path="/About">
                <About/>
              </Route>
              <Route path="/Project">
                <Project/>
              </Route>
            </Switch> */}
        </div>
          {/* </Router> */}
    <div className = "line"></div>
    <div className = "under_line">
        <h5 className = "headline">Передовая IT-студия</h5>
        <h1 className = "text">Мы создаем легкие решения <br />
        для самых сложных задач</h1>
      <button className = "open_projects">Наши проекты</button>
    </div>
    </div>
  
  </header>
  )
};

export default Header;
