import React from 'react';
import "./footer.style.css";


const Footer = () => {
  return (
  <footer id = "footer">
      <div id = "footer_container"> 
      <div className = "listbox">         
          <div className = "list">
              <h3 className = "list_name">Контакты</h3>
              <a className = "list_link" href = "#"> &#9993; google@google.com</a>
              <a className = "list_link" href = "#"> &#9742; + 1 650 253 0000</a>
              <a className = "list_link" href = "#"> &#9992; 1600 Amphiteatre Pkwy, <br></br>
                                                            Mountaim View, <br></br>CA 94043, USA</a>
          </div>
          <div className = "list">
              <h3 className = "list_name">Наши проекты</h3>
              <a className = "list_link" href = "#"> &#9658; Google</a>
              <a className = "list_link" href = "#"> &#9658; Facebook</a>
              <a className = "list_link" href = "#"> &#9658; Telegram</a>
              <a className = "list_link" href = "#"> &#9658; Yandex</a>
          </div>
          <div className = "list">
              <h3 className = "list_name">Не наши проекты</h3>
              <a className = "list_link" href = "#"> &#9658; Uber</a>
              <a className = "list_link" href = "#"> &#9658; Monobank</a>
              <a className = "list_link" href = "#"> &#9658; Converse</a>
              <a className = "list_link" href = "#"> &#9658; Dior</a>
          </div>
          <div className = "list">
              <h3 className = "list_name">Просто слова</h3>
              <a className = "list_link" href = "#"> &#9658; Утка</a>
              <a className = "list_link" href = "#"> &#9658; Мотыга</a>
              <a className = "list_link" href = "#"> &#9658; Соус</a>
              <a className = "list_link" href = "#"> &#9658; Книга</a>
          </div>
      </div>
      </div>
      <div className = "line2" />
      <div>
          <h3 className="last_word"> &#9940; Первый проект сайта - Vlad Doletskiy</h3>
      </div>
  </footer> 

  )
};

export default Footer;
