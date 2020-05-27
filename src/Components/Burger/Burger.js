import React from 'react';
import './burger.style.css';
import { Link } from 'react-router-dom';

class Burger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true

        };
    }
        // this.setState((current) => ({ isOpen: !current.isOpen}))

  render(){  
        return (
      <div> 
        <div id = "burger">
        {/* <div class={`sidebar ${this.state.isOpen ? 'sidebar--open' : ''}`}>  */}
        <a id="open"  href="#" class="menu-btn">
        <span></span>
        </a>
        </div>
        <div id = "sidebare">
            <Link className="header_link" to="/">Главная</Link>
            <Link className="header_link" to="/Project">Наши проекты</Link>
            <Link className="header_link" to="/About">Услуги</Link>
            <Link className="header_link" to="/Users">Новости</Link>
            <Link className="header_link" to="/Modal">Вход</Link>
        </div>
        </div>
    )
        }
}; 

export default Burger;
