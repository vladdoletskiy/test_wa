import React from 'react';
import "./content.style.css";
import logo from "./img/insta.png";
import logo2 from "./img/Facebook.png";
import logo3 from "./img/wiki.png";


const Content = () => {
  return (
      <div>
            <div className = "contentbox1">
                <h2 className = "text_for_content1">
                    Мы создали всё чем ты пользуешься
                </h2>
                <h2 className = "text_for_content2">
                    Да, это так. Мы боги в IT. <br></br>
                    До сих пор считаешь, 
                    что Стив Джобс придумал Apple?<br></br>
                    Нет! Это сделали мы. 
                </h2>
            </div>
            <div className = "contentbox2">
                <img src = {logo} className = "image"/>
                <div className = "minicont">
                    <h1 className = "fun_advert">Instagram</h1>
                    <h2 className = "fun_advert2">Это мы придумали <br></br>
                    фоткать еду</h2>
                </div>
                <img src = {logo2} className = "image"/>
                <div className = "minicont">
                    <h1 className = "fun_advert">Facebook</h1>
                    <h2 className = "fun_advert2">Это мы придумали <br></br>
                    лайкать бывшего</h2>
                </div>
                <img src = {logo3} className = "image"/>
                <div className = "minicont">
                    <h1 className = "fun_advert">Wikipedia</h1>
                    <h2 className = "fun_advert2">Это мы написали реферат <br></br>
                    для твоей сестры</h2>
                </div>  
            </div>

            <div id = "button_content" className = "contentbox1">
                <button className = "open_projects">Наши услуги</button>
            </div>
        </div>
  )
  
};

export default Content;
