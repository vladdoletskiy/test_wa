import React from 'react';
import './burger.style.css';
import { Link } from 'react-router-dom';

class Burger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false

        };
    }


        onClick = () => {
            this.setState((current) => ({ isOpen: !current.isOpen}))
        };

  render(){  
        return (
      <div> 
        <div id = "burger" >
        <a id="open" onClick={this.onClick}  className="menu-btn">
        <span></span>
        </a>
        </div>
        <div id = "sidebare" class={`sidebar ${this.state.isOpen ? 'sidebar--open' : ''}`}>
            <Link className="header_link" to="/">Главная</Link>
            <Link className="header_link" to="/Project">Наши проекты</Link>
            <Link className="header_link" to="/About">Космос</Link>
            <Link className="header_link" to="/Users">Книги</Link>
        </div>
        </div>
    )
        }
}; 

export default Burger;
