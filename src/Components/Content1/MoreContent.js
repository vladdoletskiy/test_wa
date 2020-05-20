import React from 'react';
import "./morecontent.style.css";
import logo3 from "./img/notebook.png";
import youtube from "./img/youtube.png";
import google from "./img/google.png";
import apple from "./img/apple.png";
import telegram from "./img/telegram.png";
import windows from "./img/windows.png";

const logoList = [
  {
    img: youtube,
    title: () => <>Это сделали <br /> МЫ!</>
  },
  {
    img: google,
    title: () => <>Это сделали <br /> МЫ!</>
  },
  {
    img: apple,
    title: () => <>Это сделали <br /> МЫ!</>
  },
  {
    img: telegram,
    title: () => <>Это сделали <br /> МЫ!</>
  },
  {
    img: windows,
    title: () => <>Это сделали <br /> МЫ!</>
  }
]
const MoreContent = () => {
  return (
    <div id="maincontainer"> 
        <div className = "container"> 
          <div className = "container_text">
            <h2 className = "text_cont">Высокие стандарты <br />
                                                 разработки</h2>
            <h2 className = "text_cont2">
                У нас есть два компьютера.
                И целых пять Джунов. <br />
                Они по очереди работают.
                Мы им даже не платим.</h2>
            <a className = "link_more" href = "#">Подробно о компании</a>
          </div>     
          <div className = "container_img">
            <img src = {logo3} className = "image2" alt = "Упс"/>
          </div>    
        </div>
        
        <div className = "line2" />
        <div className = "our_projects">

          {logoList.map((item) => (
            <div className = "logo_projects">
              <img className = "img_logo" alt = "Упс" src = {item.img} />
              <h6 className = "text_logo">{item.title()}</h6>
            </div>
          ))}
        </div>
    </div>
  )
};

export default MoreContent;
