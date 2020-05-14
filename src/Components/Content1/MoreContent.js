import React from 'react';
import "./morecontent.style.css";
import logo3 from "./img/notebook.png";
import youtube from "./img/youtube.png";
import google from "./img/google.png";
import apple from "./img/apple.png";
import telegram from "./img/telegram.png";
import windows from "./img/windows.png";


const MoreContent = () => {
  return (

    <div> 
        <div className = "container"> 
        <div className = "container_text">
            <h2 className = "text_cont">Высокие стандарты <br></br>
                                                 разработки</h2>
            <h2 className = "text_cont2">
                У нас есть два компьютера.
                И целых пять Джунов. <br></br>
                Они по очереди работают.
                Мы им даже не платим.</h2>
            <a className = "link_more" href = "#">Подробно о компании</a>
        </div>     
        <div className = "container_img">
        <img src = {logo3} className = "image2"/>
        </div>    
        </div>
        <div className = "line2"></div>
        <div className = "our_projects">
          <div className = "logo_projects"> 
            <img className = "img_logo" src = {youtube}></img>
            <h6 className = "text_logo">Это сделали <br></br> МЫ!</h6>
          </div>
          <div className = "logo_projects"> 
            <img className = "img_logo" src = {google}></img>
            <h6 className = "text_logo">Это сделали <br></br> МЫ!</h6>
          </div>
          <div className = "logo_projects">
            <img className = "img_logo" src = {apple}></img>
            <h6 className = "text_logo">Это сделали <br></br> МЫ!</h6>
          </div>
          <div className = "logo_projects">
            <img className = "img_logo" src = {telegram}></img>
            <h6 className = "text_logo">Это сделали <br></br> МЫ!</h6>
          </div>
          <div className = "logo_projects"> 
            <img className = "img_logo" src = {windows}></img>
            <h6 className = "text_logo">Это сделали <br></br> МЫ!</h6>
          </div>
        </div>
    </div>
  )
};

export default MoreContent;
