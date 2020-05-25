import React from 'react';
import './burger.style.css';


const Burger = () => {
    const buttonClick = () => {
        // this.setState((current) => ({ isOpen: !current.isOpen}))
  };
  return (
      <div> 
        <div id = "burger">
        {/* <div class={`sidebar ${this.state.isOpen ? 'sidebar--open' : ''}`}>  */}
        <a id="open"  href="#" class="menu-btn">
        <span></span>
        </a>
        </div>
        {/* <div id = "sidebare">
            <a className = "header_link" href="#">Главная</a>
            <a className = "header_link" href="#">Проекты</a>
            <a className = "header_link" href="#">Услуги</a>
            <a className = "header_link" href="#">Новости</a>
        </div> */}
        </div>
    )

}; 

export default Burger;
