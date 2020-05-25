import React from 'react';
import {
  Link
} from "react-router-dom";
import './header.css';

const Header = () => {
  return (
    <header className = "firstscreen">
      <div  id="baner"> 
        <div className = "header">
         <Link className = "header_link" to="/">Главная</Link>
          <Link className = "header_link" to="/Project">Наши проекты</Link>
          <Link className = "header_link" to="/About">Услуги</Link>
          <Link className = "header_link" to="/Users">Новости</Link>
          <Link className = "header_link" to="/">Вход</Link>
        </div>
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
