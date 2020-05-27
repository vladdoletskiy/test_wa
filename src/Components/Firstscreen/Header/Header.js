import React from 'react';
import {
  Link,
} from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom'
import './header.css';

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  
  const buttonClick = () => {
    console.log('click');
  };
  
  React.useEffect(() => {
    const isAuth = sessionStorage.getItem("IS_AUTH") === "true";
    console.log(location.pathname)
    if (location.pathname !== '/Modal' && location.pathname !== '/') {
      if (!isAuth) {
        history.replace("/");
      }
    }
  }, [location.pathname])
  
  const onLogout = () => {
    sessionStorage.removeItem("IS_AUTH");
  };
  
  const get = () => {
    fetch ("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <header className="firstscreen">
      <div id="baner">
        <div className="header">
          <Link className="header_link" to="/">Главная</Link>
          <Link className="header_link" to="/Project">Наши проекты</Link>
          <Link className="header_link" to="/About">Услуги</Link>
          <Link className="header_link" to="/Users">Новости</Link>
          {sessionStorage.getItem("IS_AUTH") === "true" ? (
            <Link onClick={onLogout} className="header_link" to="/">Выход</Link>
          ) : (
            <Link className="header_link" to="/Modal">Вход</Link>
          )}
          
        </div>
        <div className="line" />
        <div className="under_line">
          {location.pathname === '/Project' ? (
            <>
              <div>Наши проекты</div>
              <div>
                <button onClick={get}>get</button>
              </div>
              <div>
  
              </div>
            </>
          ) : (
            <>
              <h5 className="headline">Передовая IT-студия</h5>
              <h1 className="text">
                Мы создаем легкие решения
                <br />
                для самых сложных задач
              </h1>
              <button onClick={buttonClick} className="open_projects">Наши проекты</button>
            </>
          )}
          
        </div>
      </div>

    </header>
  );
};

export default Header;
