import React from 'react';
import "./header.css";

const Header = () => {
  
  return (
  <header className = "firstscreen">
    <div  id="baner"> 
    <nav className = "header">
      <a className = "header_link" href="#">Главная</a>
      <a className = "header_link" href="#">Наши проекты</a>
      <a className = "header_link" href="#">Услуги</a>
      <a className = "header_link" href="#">Новости</a>
      <a className = "header_link" href="#">Вход</a>
      </nav>
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
