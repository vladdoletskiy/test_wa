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
  

  return (
    <header className="firstscreen">
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
    </header>
  );
};

export default Header;
