import React from 'react';
import "./mailing.style.css";



const Mailing  = () => {
  return (
    <div className = "mailingBox">
        <div className = "line2" />
            <div >
                <h3 className = "text_for_content1">Подпишись на наш спам!</h3>
                <h2 className = "text_for_content2">Бесполезные статьи, письма и новости - получи это сейчас!</h2>
            <form className = "mailingForm">
                <input className = "email" type = "email" placeholder = "Ваш e-mail" />
                <button id = "button" type="submit">Подписаться</button>
            </form>
            <h2 className = "text_for_content2">Ты никогда не сможешь от нас отписаться </h2>
        </div>
    </div>
  )
};

export default Mailing;
